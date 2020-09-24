package go.travels.backend.controller;

import go.travels.backend.document.Trip;
import go.travels.backend.dto.TripDTO;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;

@RestController
@RequestMapping("/viagem")
public class TripController {

    private SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    private Integer qtdPorPagina = 15;

    @Autowired
    TripService tripService;

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody TripDTO tripDTO){
        Trip trip = convertDtoforTrip(tripDTO);
        tripService.persist(trip);
        return ResponseEntity.ok().body(convertTripForDto(trip));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Page<TripDTO>> findAll(
             @PathVariable String userId,
             @RequestParam(value = "pag", defaultValue = "0") Integer pag,
             @RequestParam(value = "ord", defaultValue = "id") String ord,
             @RequestParam(value = "dir", defaultValue = "DESC") String dir){

        PageRequest pageRequest = PageRequest.of(pag, qtdPorPagina, Sort.Direction.valueOf(dir), ord);
        Page<Trip> trip = tripService.findByUserId(userId, pageRequest);

        Page<TripDTO> tripDTO = trip.map(x -> convertTripForDto(x));

        return ResponseEntity.ok(tripDTO);

    }

    private Trip convertDtoforTrip(TripDTO tripDTO) {
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
                trip.getLatMatch(),
                trip.getLngMatch(),
                trip.getLatDestiny(),
                trip.getLngDestiny(),
                trip.getDestiny(),
                trip.getIdUser(),
                trip.getId()
        );
    }
}
