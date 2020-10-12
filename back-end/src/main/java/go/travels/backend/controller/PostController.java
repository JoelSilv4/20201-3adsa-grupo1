package go.travels.backend.controller;

import go.travels.backend.document.Like;
import go.travels.backend.dto.LikeDTO;
import go.travels.backend.dto.PostDTO;
import go.travels.backend.document.Post;
import go.travels.backend.document.Trip;
import go.travels.backend.services.LikeService;
import go.travels.backend.services.PostService;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping("/pub")
public class PostController {

    private Integer qtdPorPagina = 15;

    @Autowired
    TripService tripService;

    @Autowired
    PostService postService;

    @Autowired
    LikeService likeService;

    private final DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
    private final LocalDateTime now = LocalDateTime.now();

    @PostMapping("/create/{tripId}")
    public ResponseEntity<PostDTO> create(@RequestBody PostDTO postDTO, @PathVariable String tripId) {
        if (tripService.exist(tripId)) {
            Optional<Trip> trip = tripService.findById(tripId);

            Post post = convertDTOforDoc(postDTO, trip);
            post.setDate(dtf.format(now));

            postService.persist(post);

            return ResponseEntity.created(null).body(convertDocforDTO(post));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<Page<PostDTO>> findAll(
            @RequestParam(value = "pag", defaultValue = "0") Integer pag,
            @RequestParam(value = "ord", defaultValue = "id") String ord,
            @RequestParam(value = "dir", defaultValue = "DESC") String dir){

        PageRequest pageRequest = PageRequest.of(pag, qtdPorPagina, Sort.Direction.valueOf(dir), ord);
        Page<Post> post = postService.findAll(pageRequest);

        Page<PostDTO> postDTOS = post.map(this::convertDocforDTO);

        return ResponseEntity.ok(postDTOS);
    }


    @PostMapping("/like")
    public ResponseEntity<LikeReturn> like(@RequestBody LikeDTO likeDTO ) {
        Like like = likeService.findPost(likeDTO.getUserId(), likeDTO.getPostId());
        Optional<Post> post = postService.findById(likeDTO.getPostId());

        LikeReturn response = new LikeReturn();

        if (like != null) {
            try {
                likeService.delete(like.getId());

                post.get().setLikes(post.get().getLikes() - 1);
                postService.persist(post.get());

                response.setCountLikes(post.get().getLikes());
                response.setLiked(false);

                return ResponseEntity.ok().body(response);
            } catch (Exception e) {
                System.out.println("deletou");
                return ResponseEntity.badRequest().build();
            }
        } else {
            post.get().setLikes(post.get().getLikes() + 1);
            postService.persist(post.get());

            likeService.persist(convertLike(likeDTO));

            response.setCountLikes(post.get().getLikes());
            response.setLiked(true);


            return ResponseEntity.ok().body(response);
        }
    }

    private Post convertDTOforDoc(PostDTO postDTO, Optional<Trip> trip) {
        return new Post(
                postDTO.getTitle(),
                postDTO.getDescription(),
                trip
        );
    }

    private PostDTO convertDocforDTO(Post post) {
        return new PostDTO(
                post.getId(),
                post.getTitle(),
                post.getDescripton(),
                post.getLikes(),
                post.getTrip(),
                post.getDate()
        );
    }

    private Like convertLike(LikeDTO likeDTO) {
        return new Like(
                likeDTO.getPostId(),
                likeDTO.getUserId()
        );
    }

    public static class LikeReturn {
        private Integer countLikes;
        private Boolean liked;

        public Integer getCountLikes() {
            return countLikes;
        }

        public void setCountLikes(Integer countLikes) {
            this.countLikes = countLikes;
        }

        public Boolean getLiked() {
            return liked;
        }

        public void setLiked(Boolean liked) {
            this.liked = liked;
        }
    }
}
