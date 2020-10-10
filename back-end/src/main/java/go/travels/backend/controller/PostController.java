package go.travels.backend.controller;

import go.travels.backend.dto.PostDTO;
import go.travels.backend.document.Post;
import go.travels.backend.document.Trip;
import go.travels.backend.services.PostService;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping("/post")
public class PostController {

    private Integer qtdPorPagina = 15;

    @Autowired
    TripService tripService;

    @Autowired
    PostService postService;

    private DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
    private LocalDateTime now = LocalDateTime.now();

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

    @GetMapping("/findAll")
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
    public ResponseEntity<LikeReturn> like(@RequestBody ObjectId objectId ) {
        Optional<Post> post = postService.findById(objectId.getPostId());
        for (Object id: post.get().getListLikes().toArray()) {
            System.out.println(id);
        }

        if (!post.get().getListLikes().isEmpty()){
            post.get().getListLikes().forEach(id -> {
                if (id.equals(objectId.getUserId())) {
                    post.get().getListLikes().remove(objectId.getUserId());
                    post.get().setLikes(post.get().getListLikes().size());

                    postService.persist(post.get());

                    LikeReturn like = new LikeReturn();
                    like.setCountLikes(post.get().getLikes());
                    like.setLiked(false);
                } else {

                    post.get().getListLikes().add(objectId.getUserId());
                    post.get().setLikes(post.get().getListLikes().size());
                    postService.persist(post.get());

                    LikeReturn like = new LikeReturn();
                    like.setCountLikes(post.get().getLikes());
                    like.setLiked(true);

                }
            });
        } else {
            List<String> list = new ArrayList<>();
            list.add(objectId.getUserId());

            post.get().setListLikes(list);
            post.get().setLikes(post.get().getListLikes().size());
            postService.persist(post.get());

            LikeReturn like = new LikeReturn();
            like.setCountLikes(post.get().getLikes());
            like.setLiked(true);

            return ResponseEntity.ok().body(like);
        }

        return ResponseEntity.noContent().build();
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
                post.getListLikes(),
                post.getTrip(),
                post.getDate()
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

    public static class ObjectId {
        private String userId;
        private String postId;

        public ObjectId(String userId, String postId) {
            this.userId = userId;
            this.postId = postId;
        }

        public String getUserId() {
            return userId;
        }

        public void setUserId(String userId) {
            this.userId = userId;
        }

        public String getPostId() {
            return postId;
        }

        public void setPostId(String postId) {
            this.postId = postId;
        }
    }
}
