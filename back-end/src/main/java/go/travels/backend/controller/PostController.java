package go.travels.backend.controller;

import go.travels.backend.dto.PostDTO;
import go.travels.backend.document.Post;
import go.travels.backend.document.Trip;
import go.travels.backend.dto.TripDTO;
import go.travels.backend.services.PostService;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.util.Optional;

@RestController
@RequestMapping("/post")
public class PostController {

    private Integer qtdPorPagina = 15;

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

//    @GetMapping("/{userId}")
//    public ResponseEntity<Page<TripDTO>> findAll(
//            @PathVariable String userId,
//            @RequestParam(value = "pag", defaultValue = "0") Integer pag,
//            @RequestParam(value = "ord", defaultValue = "id") String ord,
//            @RequestParam(value = "dir", defaultValue = "DESC") String dir){
//
//        if (userService.exist(userId)){
//            PageRequest pageRequest = PageRequest.of(pag, qtdPorPagina, Sort.Direction.valueOf(dir), ord);
//            Page<Trip> trip = tripService.findByUserId(userId, pageRequest);
//
//            Page<TripDTO> tripDTO = trip.map(x -> convertTripForDto(x));
//
//            return ResponseEntity.ok(tripDTO);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//
//    }


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
