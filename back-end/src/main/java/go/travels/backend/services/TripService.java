package go.travels.backend.services;

import go.travels.backend.document.Trip;
import go.travels.backend.repositories.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class TripService {

    @Autowired
    TripRepository tripRepository;

    public Trip persist(Trip trip) { return  tripRepository.save(trip); }

    public Page<Trip> findByUserId(String userId, PageRequest pageRequest) { return tripRepository.findByIdUser(userId, pageRequest); }

    public Boolean exist(String id) { return tripRepository.existsById(id);}


}
