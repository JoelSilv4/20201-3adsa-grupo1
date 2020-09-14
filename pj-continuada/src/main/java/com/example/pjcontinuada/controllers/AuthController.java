package com.example.pjcontinuada.controllers;

import com.example.pjcontinuada.models.*;
import com.example.pjcontinuada.abstrata.Usuario;
import com.example.pjcontinuada.business.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/auth")
public class AuthController {

    private String userLogin;
    private String roleLogin;
    private boolean status;
    private List<Usuario> lista = new ArrayList();
    private Admin adminLogado;
    private Suporte suporteLogado;
    private Cliente clienteLogado;

    private AuthService auth = new AuthService();

    public AuthController() {
        auth.criarUsuario(new Admin("adm", "Adm&&1", Cargos.ADM));
        auth.criarUsuario(new Cliente("user", "User1&", Cargos.USER));
        auth.criarUsuario(new Suporte("sup", "Lux!2", Cargos.SUPORT));
    }

    @GetMapping("/usuarios")
    public List<Usuario> listarUsuarios() {
        return this.lista;
    }

    @GetMapping("/usuarios/{id}")
    public Usuario selecionarPorId(@PathVariable int id) {
        return this.lista.get(id - 1);
    }

    @PostMapping("/logar")
    public ResponseEntity logar(@RequestBody Login login) {
        return this.auth.validarLogin(login);
    }

    @GetMapping("/logado")
    public ResponseEntity logado() {
        return this.auth.estaLogado();
    }

    @GetMapping("/recuperar/{login}")
    public ResponseEntity recuperarSenha(@PathVariable String login) {
        return this.auth.recuperarSenha(login);
    }

    @DeleteMapping("/deslogar")
    public ResponseEntity deslogar() {
        return this.auth.deslogarUsuario();
    }
}