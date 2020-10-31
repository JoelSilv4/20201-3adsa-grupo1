package go.travels.backend.controller;

import go.travels.backend.document.User;
import go.travels.backend.dto.LoginDTO;
import go.travels.backend.dto.UserDTO;
import go.travels.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    UserService userService;

    @Autowired
    private BCryptPasswordEncoder bc;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody UserDTO userDTO) {

        if (validateExistingData(userDTO)) {
            User user = convertDtoforUser(userDTO);
            userService.persist(user);

            return ResponseEntity.ok().body(Optional.of(convertUserForDto(user)));
        } else {
            return ResponseEntity.unprocessableEntity().body("User already exist");
        }
    }

    @PostMapping("/logn")
    public ResponseEntity<UserDTO> login(@RequestBody LoginDTO loginDTO) {
            if (validateLogin(loginDTO)){
                User user = userService.findByEmail(loginDTO.getEmail());
                UserDTO userDTO = convertUserForDto(user);
                return ResponseEntity.ok().body(userDTO);
            } else {
                return ResponseEntity.notFound().build();
            }

    }

    private Boolean validateLogin(LoginDTO loginDTO) {
        User user = userService.findByEmail(loginDTO.getEmail());
        if (user != null) {
            return user.getEmail().equals(loginDTO.getEmail()) && user.getPassword().equals(loginDTO.getPassword());
        } else {
            return false;
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
        return new User(userDTO.getName(), userDTO.getEmail(), bc.encode(userDTO.getPassword()));
    }

    private UserDTO convertUserForDto(User user) {
        return new UserDTO(user.getName(), user.getEmail(), "", user.getId());
    }
}
