package go.travels.backend.services;

import go.travels.backend.document.User;
import go.travels.backend.repositories.UserRepository;
import go.travels.backend.utils.security.UserSS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public User persist(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Boolean exist(String id) { return userRepository.existsById(id);}
}
