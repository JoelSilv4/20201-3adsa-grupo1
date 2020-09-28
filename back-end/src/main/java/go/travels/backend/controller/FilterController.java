package go.travels.backend.controller;

import go.travels.backend.document.Filter;
import go.travels.backend.dto.FilterDTO;
import go.travels.backend.services.FilterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/filter")
public class FilterController {

    @Autowired
    FilterService filterService;

    @PostMapping
    public ResponseEntity register(@RequestBody FilterDTO filterDTO){
        Filter filter = convertDtoForFilter(filterDTO);
        filterService.persist(filter);
        return ResponseEntity.ok().body(convertFilterForDto(filter));
    }

    private Filter convertDtoForFilter(FilterDTO filterDTO){
        return new Filter(
                filterDTO.getLocalName(),
                filterDTO.getLatitude(),
                filterDTO.getLongitude(),
                filterDTO.getTripId()
        );
    }

    private FilterDTO convertFilterForDto(Filter filter){
        return new FilterDTO(
                filter.getLocalName(),
                filter.getLatitude(),
                filter.getLongitude(),
                filter.getTripId(),
                filter.getId()
        );
    }


}
