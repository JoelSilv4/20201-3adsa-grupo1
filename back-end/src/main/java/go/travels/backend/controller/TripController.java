package go.travels.backend.controller;

import go.travels.backend.archive.LeArquivo;
import go.travels.backend.document.Trip;
import go.travels.backend.dto.TripDTO;
import go.travels.backend.services.TripService;
import go.travels.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/trip")
public class TripController {

    private Integer qtdPorPagina = 15;

    @Autowired
    TripService tripService;

    @Autowired
    UserService userService;

    @PostMapping("/{userId}")
    public ResponseEntity<TripDTO> register(@RequestBody TripDTO tripDTO, @PathVariable String userId){
            if (userService.exist(tripDTO.getIdUser())){
                Trip trip = convertDtoForTrip(tripDTO);
                tripService.persist(trip);

                return ResponseEntity.created(null).body(convertTripForDto(trip));
            } else {
                return ResponseEntity.notFound().build();
            }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Page<TripDTO>> findAll(
             @PathVariable String userId,
             @RequestParam(value = "pag", defaultValue = "0") Integer pag,
             @RequestParam(value = "ord", defaultValue = "id") String ord,
             @RequestParam(value = "dir", defaultValue = "DESC") String dir){

        if (userService.exist(userId)){
            PageRequest pageRequest = PageRequest.of(pag, qtdPorPagina, Sort.Direction.valueOf(dir), ord);
            Page<Trip> trip = tripService.findByUserId(userId, pageRequest);

            Page<TripDTO> tripDTO = trip.map(this::convertTripForDto);

            return ResponseEntity.ok(tripDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/id/{tripId}")
    public ResponseEntity<Optional<Trip>> findById(@PathVariable String tripId) {
        if (tripService.exist(tripId)) {
            Optional<Trip> trip = tripService.findById(tripId);

            return ResponseEntity.ok().body(trip);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable String id){
        if (tripService.exist(id)){
            tripService.delete(id);
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
/*
    @PostMapping("/upload")
    public ResponseEntity enviar(@RequestParam("arquivo") MultipartFile arquivo) throws IOException {

        if (arquivo.isEmpty()) {
            return ResponseEntity.badRequest().body("Arquivo não enviado!");
        }

        System.out.println("Recebendo um arquivo do tipo: " + arquivo.getContentType());
        byte[] conteudo = arquivo.getBytes();

        Path path = Paths.get(arquivo.getOriginalFilename());
        Files.write(path, conteudo);

        String nomeArq = "a.txt";

        List<Trip> tripAdd = LeArquivo.leArquivo(nomeArq);

        for(Trip t : tripAdd){
            tripService.persist(t);
        }

        return ResponseEntity.created(null).build();
    }


 */
    private Trip convertDtoForTrip(TripDTO tripDTO) {
        return new Trip(
                tripDTO.getLatMatch(),
                tripDTO.getLngMatch(),
                tripDTO.getLatDestiny(),
                tripDTO.getLngDestiny(),
                tripDTO.getDestiny(),
                tripDTO.getIdUser()
        );
    }

    private TripDTO convertTripForDto(Trip trip) {
        return new TripDTO(
                trip.getId(),
                trip.getLatMatch(),
                trip.getLngMatch(),
                trip.getLatDestiny(),
                trip.getLngDestiny(),
                trip.getDestiny(),
                trip.getIdUser()
        );
    }
}
