package com.example.pjcontinuada.business;

import com.example.pjcontinuada.abstrata.Usuario;
import com.example.pjcontinuada.models.*;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

public class AuthService {

    private List<Usuario> usuariosList;
    private List<Usuario> usuarioLogado;

    public AuthService() {
        this.usuariosList = new ArrayList();
        this.usuarioLogado = new ArrayList<>();
    }

    public List<Usuario> pegarUsuarios() {
        return this.usuariosList;
    }

    public Usuario pegarUsuarioPorId(int id) {
        return this.usuariosList.get(id);
    }

    public void criarUsuario(Usuario usuario) {
        this.usuariosList.add(usuario);
    }

    public void removerUsuario(Usuario usuario) {
        this.usuariosList.remove(usuario);
    }

    public ResponseEntity validarLogin(Login login) {
        for (Usuario usuario : pegarUsuarios()) {
            if (usuario.getUsuario().equals(login.getLogin())) {
                if (usuario.getSenha().equals(login.getSenha())) {
                    logarUsuario(usuario);
                    return ResponseEntity.ok().build();
                } else {
                    return ResponseEntity.badRequest().build();
                }
            } else {
                return ResponseEntity.badRequest().build();
            }
        }
        return null;
    }

    public ResponseEntity estaLogado() {
        if (usuarioLogado != null) {
            return ResponseEntity.ok(usuarioLogado);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    public ResponseEntity recuperarSenha(String login) {
        Usuario usuario = this.usuarioLogado.get(0);

        if (usuario instanceof Admin || usuario instanceof Suporte) {
            usuario = new Admin(usuario.getUsuario(), usuario.getSenha(), usuario.getCargos());
            return ResponseEntity.ok(((Admin) usuario).recuperarSenhaUsuario(login, pegarUsuarios()));
        } else if (usuario instanceof Cliente) {
            return ResponseEntity.ok("Usuário não é admin!");
        }
        return ResponseEntity.badRequest().build();
    }

    public ResponseEntity deslogarUsuario() {
        if (this.usuarioLogado.get(0) != null) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.ok().build();
        }
    }

    public void logarUsuario(Usuario usuario) {
        if (this.usuarioLogado.size() > 0) {
            this.usuarioLogado.remove(0);
        }

        if (usuario.getCargos() == Cargos.ADM) {
            this.usuarioLogado.add(new Admin(usuario.getUsuario(), usuario.getSenha(), Cargos.ADM));
        } else if (usuario.getCargos() == Cargos.SUPORT) {
            this.usuarioLogado.add(new Suporte(usuario.getUsuario(), usuario.getSenha(), Cargos.SUPORT));
        } else if (usuario.getCargos() == Cargos.USER) {
            this.usuarioLogado.add(new Cliente(usuario.getUsuario(), usuario.getSenha(), Cargos.USER));
        }
    }
}
