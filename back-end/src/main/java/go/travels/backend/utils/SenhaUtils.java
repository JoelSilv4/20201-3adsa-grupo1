package go.travels.backend.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class SenhaUtils {
    public String gerarBcrypt(String senha) {
        return new BCryptPasswordEncoder().encode(senha);
    }
}
