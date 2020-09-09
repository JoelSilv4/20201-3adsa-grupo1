package com.example.pjcontinuada.controllers;

import com.example.pjcontinuada.models.*;
import com.example.pjcontinuada.abstrata.Usuario;
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
    private int validacao = 0;

    public AuthController() {
        lista.add(new Admin("adm", "Adm&&1", Cargos.ADM));
        lista.add(new Cliente("user", "User1&", Cargos.USER));
        lista.add(new Suporte("sup", "Lux!2", Cargos.SUPORT));
    }

    @GetMapping("/listar")
    public List<Usuario> listarUsuarios() {
        return this.lista;
    }

    @GetMapping("/listar/{id}")
    public Usuario selecionarPorId(@PathVariable int id) {
        return this.lista.get(id - 1);
    }

    @GetMapping("/logado")
    public ResponseEntity retornarUsuario() {
        return ResponseEntity.ok(getUsuarioLogado());
    }

    @PostMapping("/logar")
    public ResponseEntity logar(@RequestBody Login login) {
        this.validacao = 0;

        this.lista.forEach(usuario -> {
            if (usuario.getUsuario().equals(login.getLogin())) {
                if (usuario.getSenha().equals(login.getSenha())) {
                    logarUsuario(usuario);
                    this.validacao = 1; // logado
                } else {
                    this.validacao = 2; // senha incorreta
                }
            }
        });

        switch (this.validacao) {
            case 0:
                return ResponseEntity.notFound().build();
            case 1:
                return ResponseEntity.ok().build();
            case 2:
                return ResponseEntity.status(400).build();
        }
        return null;
    }

    @GetMapping("/recuperar/{login}")
    public ResponseEntity recuperarSenha(@PathVariable String login) {
        if (this.adminLogado != null) {
            ResponseEntity.ok(adminLogado.recuperarSenhaUsuario(login, this.lista));
        } else if (this.suporteLogado != null) {
            ResponseEntity.ok(suporteLogado.recuperarSenhaUsuario(login, this.lista));
        } else {
            ResponseEntity.ok("Usuário não é admin!");

        }
        return null;
    }

    @DeleteMapping("/deslogar")
    public ResponseEntity deletarPorId(@PathVariable int id) {
        deslogarUsuario();
        return ResponseEntity.ok("Usuário deslogado");
    }

    public void logarUsuario(Usuario usuario) {
        if (usuario.getCargos() == Cargos.ADM) {
            this.adminLogado = new Admin(usuario.getUsuario(), usuario.getSenha(), Cargos.ADM);
        } else if (usuario.getCargos() == Cargos.SUPORT) {
            this.suporteLogado = new Suporte(usuario.getUsuario(), usuario.getSenha(), Cargos.SUPORT);
        } else if (usuario.getCargos() == Cargos.USER) {
            this.clienteLogado = new Cliente(usuario.getUsuario(), usuario.getSenha(), Cargos.USER);
        }
    }

    public Usuario getUsuarioLogado() {
        if (adminLogado != null) {
            return this.adminLogado;
        } else if (suporteLogado != null) {
            return this.suporteLogado;
        } else if (clienteLogado != null) {
            return this.clienteLogado;
        } else {
            return null;
        }
    }

<<<<<<< HEAD
    public void deslogarUsuario() {
        if (adminLogado != null) {
            this.adminLogado = null;
        } else if (suporteLogado != null) {
            this.suporteLogado = null;
        } else if (clienteLogado != null) {
            this.clienteLogado = null;
=======
    @DeleteMapping("/deletar/{id}")
    public String deleteUser(@PathVariable int id) {
        lista.remove(id - 1);

        if (status) {
            return "Excluído com Sucesso!";
        } else {
            return "Falha ao excluir.";
        }
    }

    @Override
    public void authUser(String login, String senha) {
            for (Usuario i : lista) {
                if (i instanceof Usuario) {
                    if (i.getUsuario().equals(login)){
                        if(i.getSenha().equals(senha)) {
                            this.userLogin = i.getUsuario();
                            this.roleLogin = String.valueOf(i.getRoles());
                            this.status = true;
                        }
                    }
                }
            }
>>>>>>> 77629cc8d82c53634ea1b43bd4d704238c6b66d6
        }
    }

}