package go.travels.backend.controller;

import go.travels.backend.dto.PostDTO;
import go.travels.backend.document.Post;
import go.travels.backend.document.Trip;
import go.travels.backend.services.PostService;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Optional;

@RestController
@RequestMapping("/post")
public class PostController {

    @Autowired
    TripService tripService;

    @Autowired
    PostService postService;

    private SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

//    DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//    LocalDate localDate = LocalDate.now();

    @PostMapping("/create/{tripId}")
    public ResponseEntity<PostDTO> create(@RequestBody PostDTO postDTO, @PathVariable String tripId) {
        if (tripService.exist(tripId)) {
            Optional<Trip> trip = tripService.findById(tripId);
            Post post = convertDTOforDoc(postDTO, trip);

            postService.persist(post);

            return ResponseEntity.created(null).body(convertDocforDTO(post));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    private Post convertDTOforDoc(PostDTO postDTO, Optional<Trip> trip) {
        return new Post(
                postDTO.getTitle(),
                postDTO.getDescripton(),
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
                post.getTrip()
        );
    }
}
