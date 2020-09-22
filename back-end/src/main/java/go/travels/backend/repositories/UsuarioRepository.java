package go.travels.backend.repositories;

import go.travels.backend.document.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    public Optional<Usuario> findByEmail(String email);
}
