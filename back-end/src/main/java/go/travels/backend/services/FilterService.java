package go.travels.backend.services;

import go.travels.backend.document.Filter;
import go.travels.backend.repositories.FilterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilterService {

    @Autowired
    FilterRepository filterRepository;

    public Filter findByTripId(String id){
        return filterRepository.findByTripId(id);
    }

    public Filter persist(Filter filter){
        return filterRepository.save(filter);
    }
}
