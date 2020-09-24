package go.travels.backend.controller;

import go.travels.backend.document.User;
import go.travels.backend.dto.UserDTO;
import go.travels.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UserService userService;

    @PostMapping("/cadastrar")
    public ResponseEntity register(@RequestBody UserDTO userDTO) {

        if (validateExistingData(userDTO)) {
            User user = convertDtoforUser(userDTO);
            userService.persist(user);

            return ResponseEntity.ok().body(Optional.of(convertUserForDto(user)));
        } else {
            return ResponseEntity.unprocessableEntity().body("User already exist");
        }
    }

    private Boolean validateExistingData(UserDTO userDTO){
        User user = userService.findByEmail(userDTO.getEmail());
        if (user != null)
            return false;
        else
            return true;
    }

    private User convertDtoforUser(UserDTO userDTO) {
        return new User(userDTO.getName(), userDTO.getEmail(), userDTO.getPassword());
    }

    private UserDTO convertUserForDto(User user) {
        return new UserDTO(user.getName(), user.getEmail(), "", user.getId());
    }
}
