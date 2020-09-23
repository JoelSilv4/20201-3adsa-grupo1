package go.travels.backend.repositories;

import go.travels.backend.document.Trip;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripRepository extends MongoRepository<Trip, String> {
    public Trip findByIdUser(String userId);
}