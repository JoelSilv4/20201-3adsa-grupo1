package go.travels.backend.services;

import go.travels.backend.document.Trip;
import go.travels.backend.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService {

    @Autowired
    TripRepository tripRepository;

    public Trip persist(Trip trip) { return  tripRepository.save(trip); }

    public Trip findByUserId(String userId) { return tripRepository.findByIdUser(userId); }
}
