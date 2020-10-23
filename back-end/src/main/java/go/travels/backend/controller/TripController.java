package go.travels.backend.controller;

import go.travels.backend.archive.Archive;
import go.travels.backend.archive.ListaObj;
import go.travels.backend.document.Trip;
import go.travels.backend.dto.TripDTO;
import go.travels.backend.services.TripService;
import go.travels.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/trip")
public class TripController {

    private Integer qtdPorPagina = 15;

    @Autowired
    TripService tripService;

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity cadastrar(@RequestBody TripDTO tripDTO){
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

            Page<TripDTO> tripDTO = trip.map(x -> convertTripForDto(x));

            return ResponseEntity.ok(tripDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable String id){
        if (tripService.exist(id)){
            tripService.delete(id);
            return ResponseEntity.accepted().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

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
                trip.getLatMatch(),
                trip.getLngMatch(),
                trip.getLatDestiny(),
                trip.getLngDestiny(),
                trip.getDestiny(),
                trip.getIdUser(),
                trip.getId()
        );
    }

    @GetMapping("/downloadcsv/{idUser}")
    public HttpEntity<byte[]> download(@PathVariable String idUser) throws IOException {

        List<Trip> o = tripService.findAllByIdUser(idUser);
        ListaObj<Trip> listaObj = new ListaObj<>(o.size());
        for(Trip t : o){
            listaObj.adiciona(t);
        }

        Archive.gravaNaListaCSV(listaObj);

        byte[] arquivo = Files.readAllBytes( Paths.get("C:\\Users\\Acer\\Desktop\\20201-3adsa-grupo1\\back-end\\trip.csv") );

        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.add("Content-Disposition", "attachment;filename=\"trip.csv\"");

        HttpEntity<byte[]> entity = new HttpEntity<byte[]>( arquivo, httpHeaders);

        return entity;
    }

    @GetMapping("/downloadtxt/{idUser}")
    public HttpEntity<byte[]> downloadtxt(@PathVariable String idUser) throws IOException {

        List<Trip> o = tripService.findAllByIdUser(idUser);
        ListaObj<Trip> listaObj = new ListaObj<>(o.size());
        for(Trip t : o){
            listaObj.adiciona(t);
        }
        String header = "Exportação de dados via arquivo de texto: Descrição das viagens do usuário:\n" +
                "ID do usuário: " + idUser + "\n";


        String cabecalho = String.format("\n%-25s %-25s %-25s %-25s %-25s \n", "ID", "LAT PARTIDA", "LNG PARTIDA" , "LAT DESTINO", "LNG DESTINO");
        String trailer = String.format("%-25s \n", "FIM DO DOCUMENTO");

        Archive.gravaRegistroTXT(header);
        Archive.gravaRegistroTXT(cabecalho);
        Archive.gravaNaListaTXT(listaObj);
        Archive.gravaRegistroTXT(trailer);


        byte[] arquivo = Files.readAllBytes( Paths.get("C:\\Users\\Acer\\Desktop\\20201-3adsa-grupo1\\back-end\\trip.txt") );

        HttpHeaders httpHeaders = new HttpHeaders();

        httpHeaders.add("Content-Disposition", "attachment;filename=\"trip.txt\"");

        HttpEntity<byte[]> entity = new HttpEntity<byte[]>( arquivo, httpHeaders);

        return entity;
    }
}
