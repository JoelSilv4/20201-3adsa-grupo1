package com.example.pjcontinuada.controllers;

import com.example.pjcontinuada.dto.Cadastro;
import com.example.pjcontinuada.dto.Roles;
import com.example.pjcontinuada.validation.Validation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@RestController
@RequestMapping("/autenticacao")
public class AuthController implements Validation {

    private String userLogin;
    private String roleLogin;
    private boolean status;
    private List<Cadastro> lista = Arrays.asList(
        new Cadastro("adm", "Adm&&1", Roles.ADM),
        new Cadastro("user", "User1&", Roles.USER),
            new Cadastro("arthur", "123", Roles.USER),
        new Cadastro("sup", "Lux!2", Roles.SUPORT)
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

    @Override
    public void authUser(String login, String senha) {
            for (Cadastro i : lista) {
                if (i instanceof Cadastro) {
                    if (i.getUsuario().equals(login)){
                        if(i.getSenha().equals(senha)) {
                            this.userLogin = i.getUsuario();
                            this.roleLogin = String.valueOf(i.getRole());
                            this.status = true;
                        }
                    }
                }
            }
        }
}