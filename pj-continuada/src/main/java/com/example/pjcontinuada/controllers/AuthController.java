package com.example.pjcontinuada.controllers;

import com.example.pjcontinuada.Admin;
import com.example.pjcontinuada.Suporte;
import com.example.pjcontinuada.Cliente;
import com.example.pjcontinuada.Usuario;
import com.example.pjcontinuada.dto.Cadastro;
import com.example.pjcontinuada.dto.Roles;
import com.example.pjcontinuada.validation.Validation;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/autenticacao")
public class AuthController implements Validation {

    private String userLogin;
    private String roleLogin;
    private boolean status;
    private List<Usuario> lista = Arrays.asList(
        new Admin("adm", "Adm&&1", Roles.ADM),
        new Cliente("user", "User1&", Roles.USER),
        new Suporte("sup", "Lux!2", Roles.SUPORT)
    );

    @PostMapping("/entrar/{login}/{senha}")
    public String login(@PathVariable String login, @PathVariable String senha) {

        if (userLogin == null) {
            authUser(login, senha);
        } else {
            return "Ja existe um usuario logado";
        }

        if (status) {
                return "Autenticado com Sucesso!";
        } else {
                return "Falha no login.";
        }
    }

    @DeleteMapping
    public void del() {
        userLogin = null;
        roleLogin = null;
    }

    @GetMapping
    public String userAuth() {
        if (userLogin != null) {
            return  "{ usuario : " + userLogin + " , tipo : "+ roleLogin + "}";
        } else {
            return "[]";
        }
    }

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
        }
}