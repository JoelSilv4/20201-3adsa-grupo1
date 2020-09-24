package go.travels.backend.controller;

import go.travels.backend.document.Trip;
import go.travels.backend.dto.TripDTO;
import go.travels.backend.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;

@RestController
@RequestMapping("/viagem")
public class TripController {

    private SimpleDateFormat dataFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    @Autowired
    TripService tripService;

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody TripDTO tripDTO){
        Trip trip = convertDtoforTrip(tripDTO);
        tripService.persist(trip);
        return ResponseEntity.ok().body(convertTripForDto(trip));
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
