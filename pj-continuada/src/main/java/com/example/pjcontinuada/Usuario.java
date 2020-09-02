package com.example.pjcontinuada;

import com.example.pjcontinuada.dto.Roles;

public class Usuario {
    private String usuario;
    private String senha;
    private Roles roles;

    public Usuario(String usuario, String senha, Roles roles) {
        this.usuario = usuario;
        this.senha = senha;
        this.roles = roles;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Roles getRoles() {
        return roles;
    }

    public void setRoles(Roles roles) {
        this.roles = roles;
    }
}
