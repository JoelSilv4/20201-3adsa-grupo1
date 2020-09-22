package go.travels.backend.controller;

import go.travels.backend.document.Usuario;
import go.travels.backend.dto.UsuarioDto;
import go.travels.backend.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
@RequestMapping("/go/usuario")
public class UsuarioController {

    @Autowired
    UsuarioService usuarioService;

    @PostMapping("/cadastrar")
    public ResponseEntity<Optional<UsuarioDto>> register(@RequestBody UsuarioDto usuarioDto, BindingResult result) {

        validateExistingData(usuarioDto);

        Usuario usuario = convertDtoforUser(usuarioDto);
        usuarioService.persist(usuario);

        return ResponseEntity.ok().body(Optional.of(convertUserForDto(usuario)));
    }

    private void validateExistingData(UsuarioDto usuarioDto){
        Optional<Usuario> usuario = usuarioService.findByEmail(usuarioDto.getEmail());
        if (usuario != null) {
            ResponseEntity.badRequest().body("User already exist");
        }
    }

    private Usuario convertDtoforUser(UsuarioDto usuarioDto) {
        return new Usuario(usuarioDto.getName(), usuarioDto.getEmail(), usuarioDto.getPassword());
    }

    private UsuarioDto convertUserForDto(Usuario usuario) {
        return new UsuarioDto(usuario.getName(), usuario.getEmail(), "", Optional.of(usuario.getId()));
    }
}
