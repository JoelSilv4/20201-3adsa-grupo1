package com.gotravel.application.controller

import com.gotravel.application.dto.Author
import com.gotravel.application.dto.NewArticle
import com.gotravel.application.dto.NewComment
import com.gotravel.application.dto.UpdateArticle
import com.gotravel.application.response.Response
import com.gotravel.application.validations.InvalidRequest
import com.gotravel.domain.entities.Article
import com.gotravel.domain.entities.Comment
import com.gotravel.domain.entities.Tag
import com.gotravel.domain.repositories.ArticleRepository
import com.gotravel.domain.repositories.TagRepository
import com.gotravel.domain.service.ArticleService
import com.gotravel.domain.service.UserService
import com.github.slugify.Slugify
import com.gotravel.domain.service.ItineraryService
import org.springframework.data.domain.PageRequest
import org.springframework.data.domain.Sort
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*
import javax.validation.Valid

@RestController
@RequestMapping("/article")
class ArticleController(
        val tagRepository: TagRepository,
        val articleRepository: ArticleRepository,
        val userService: UserService,
        val articleService: ArticleService,
        val itineraryService: ItineraryService
) {

    @GetMapping()
    fun articles(@RequestParam(defaultValue = "20") limit: Int,
                 @RequestParam(defaultValue = "0") offset: Int,
                 @RequestParam(defaultValue = "") tag: String,
                 @RequestParam(defaultValue = "") author: String,
                 @RequestParam(defaultValue = "") favorited: String): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()

        val p = PageRequest.of(offset, limit, Sort.Direction.DESC, "createdAt")
        val a = articleService.findBy(tag, author, favorited, p)

        response.data = (articlesView(a))

        return ResponseEntity.ok(response)
    }

    @GetMapping("/feed")
    fun feed(
            @RequestParam(defaultValue = "20") limit: Int,
            @RequestParam(defaultValue = "0") offset: Int
    ): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()

        val currentUser = userService.currentUser()
        val page = articleRepository.findByAuthorIdInOrderByCreatedAtDesc(currentUser?.follows?.map { it.id },
                PageRequest.of(offset, limit))
        response.data = (articlesView(page))

        return ResponseEntity.ok(response)
    }

    @GetMapping("/{slug}")
    fun article(@PathVariable slug: String): ResponseEntity<Response<Any>>{
        val response: Response<Any> = Response<Any>()

        articleRepository.findBySlug(slug)?.let {
            response.data = articleView(it)
            return ResponseEntity.ok(response)
        }
        return ResponseEntity.notFound().build()
    }

    @PostMapping()
    fun newArticle(@Valid @RequestBody newArticle: NewArticle, result: BindingResult): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()

        InvalidRequest.check(response, result)

        if (response.erros.isNotEmpty()) {
            return ResponseEntity.badRequest().body(response)
        }

        var slug = Slugify().slugify(newArticle.title)

        if (articleRepository.existsBySlug(slug)) {
            slug += "-" + UUID.randomUUID().toString().substring(0, 8)
        }

        val currentUser = userService.currentUser()

        val tagList = newArticle.tagList.map {
            tagRepository.findByName(it) ?: tagRepository.save(Tag(name = it))
        }

        val itinerary = itineraryService.findById(newArticle.itinerary)

        val article = NewArticle.toDocument(newArticle, slug,
                Author(name = currentUser?.name,
                        email = currentUser?.email,
                        id = currentUser?.id,
                        image = currentUser?.image), tagList, itinerary?.get())

        articleRepository.save(article)
        response.data = (articleView(article))

        return ResponseEntity.ok().body(response)
    }

    @PutMapping("/{slug}")
    fun updateArticle(@PathVariable slug: String, @Valid @RequestBody article: UpdateArticle, result: BindingResult): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()
        val formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            if (it?.author?.id != user?.id){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }

            var slug: String? = it.slug
            article.title?.let { newTitle ->
                if (newTitle != it?.title) {
                    slug = Slugify().slugify(article.title)
                    if (articleRepository.existsBySlug(slug!!)){
                        slug += "-" + UUID.randomUUID().toString().substring(0, 8)
                    }
                }
            }

            val tagList = article.tagList?.map {
                tagRepository.findByName(it) ?: tagRepository.save(Tag(name = it))
            }

            val update = it.copy(
                    slug = slug,
                    title = article.title ?: it.title,
                    description = article.description ?: it.description,
                    body = article.body ?: it.body,
                    updatedAt = formatter.format(LocalDateTime.now()),
                    tagList = if (tagList.isNullOrEmpty()) it.tagList else tagList.toMutableList()
            )

            articleRepository.save(update)
            response.data = articleView(update)
            return ResponseEntity.ok().body(response)
        }
        return ResponseEntity.notFound().build()
    }

    @DeleteMapping("/{slug}")
    fun deleteArticle(@PathVariable slug: String): ResponseEntity<Any> {
        articleRepository.findBySlug(slug)?.let {
            if(it?.author?.id != userService.currentUser()?.id) {
                return ResponseEntity.status(HttpStatus.FORBIDDEN).build()
            }
            articleRepository.delete(it)
            return ResponseEntity.ok().build()
        }
        return ResponseEntity.notFound().build()
    }

    @GetMapping("/{slug}/comments")
    fun articleComments(@PathVariable slug: String): ResponseEntity<Response<Any>>{
        val response: Response<Any> = Response<Any>()
        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            val comments = it.comments.asReversed()
            response.data = commentsView(comments)

            return ResponseEntity.ok().body(response)
        }
        return ResponseEntity.notFound().build()
    }

    @PostMapping("/{slug}/comments")
    fun addComment(@PathVariable slug: String, @Valid @RequestBody comment: NewComment, result: BindingResult): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()

        InvalidRequest.check(response, result)

        if (response.erros.isNotEmpty()) {
            return ResponseEntity.badRequest().body(response)
        }

        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            val newComment = Comment(
                    body = comment.body!!,
                    author = Author(id = user?.id, image = user?.image, email = user?.email, name = user?.name),
                    id = UUID.randomUUID().toString())
            it.comments.add(newComment)
            articleRepository.save(it)
            response.data = commentView(newComment)
            return ResponseEntity.ok().body(response)
        }
        return ResponseEntity.notFound().build()
    }

    @DeleteMapping("/{slug}/comments/{id}")
    fun deleteComment(@PathVariable slug: String, @PathVariable id: String): ResponseEntity<Any> {
        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            it.comments.map { c ->
                if (c.id == id) {
                    return if (c.author.id.equals(user?.id)){
                        it.comments.remove(c)
                        articleRepository.save(it)
                        ResponseEntity.ok().build()
                    } else {
                        ResponseEntity.status(HttpStatus.FORBIDDEN).build()
                    }
                }
            }
            return ResponseEntity.notFound().build()
        }
        return ResponseEntity.notFound().build()
    }

    @PostMapping("/{slug}/favorite")
    fun favoriteArticle(@PathVariable slug: String): ResponseEntity<Response<Any>> {
        val response: Response<Any> = Response<Any>()

        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            if (!it.favorited.contains(user)){
                it.favorited.add(user)
                articleRepository.save(it)
                response.data = articleView(it)
                return ResponseEntity.ok().body(response)
            }
        }
        return ResponseEntity.notFound().build()
    }

    @DeleteMapping("/{slug}/favorite")
    fun unfavoriteArticle(@PathVariable slug: String): ResponseEntity<Response<Any>>{
        val response: Response<Any> = Response<Any>()

        articleRepository.findBySlug(slug)?.let {
            val user = userService.currentUser()
            if (it.favorited.contains(user)){
                it.favorited.remove(user)
                articleRepository.save(it)
                response.data = articleView(it)
                return ResponseEntity.ok().body(response)
            }
        }
        return ResponseEntity.notFound().build()
    }

    fun articleView(article: Article) = mapOf("article" to article)

    fun articlesView(articles: List<Article>) = mapOf("articles" to articles,
            "articlesCount" to articles.size)

    fun commentView(comment: Comment) = mapOf("article" to comment)

    fun commentsView(comments: List<Comment>) = mapOf("comments" to comments,
            "articlesCount" to comments.size)
}