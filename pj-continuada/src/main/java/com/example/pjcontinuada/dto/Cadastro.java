package com.example.pjcontinuada.dto;

public class Cadastro {
    private String usuario;
    private String senha;
    Roles Role;

    public Cadastro(String usuario, String senha, Roles role) {
        this.usuario = usuario;
        this.senha = senha;
        this.Role = role;
    }

    public String getUsuario() {
        return usuario;
    }

    public String getSenha() {
        return senha;
    }

    public Roles getRole() {
        return Role;
    }

    @Override
    public String toString() {
        return "Cadastro{" +
                "usuario='" + usuario + '\'' +
                ", senha='" + senha + '\'' +
                '}';
    }
}
