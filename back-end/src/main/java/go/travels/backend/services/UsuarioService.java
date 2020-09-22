package go.travels.backend.services;

import go.travels.backend.document.Usuario;
import go.travels.backend.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService{

    @Autowired
    UsuarioRepository usuarioRepository;

    public Usuario persist(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    public Optional<Usuario> findByEmail(String email) {
        return usuarioRepository.findByEmail(email);
    }

    public Optional<Usuario> findById(String usuarioId) {
        return usuarioRepository.findById(usuarioId);
    }
}
