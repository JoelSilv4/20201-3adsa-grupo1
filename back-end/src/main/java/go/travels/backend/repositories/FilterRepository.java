package go.travels.backend.repositories;

import go.travels.backend.document.Filter;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilterRepository extends MongoRepository<Filter, String> {
    Filter findByTripId(String id);
}
