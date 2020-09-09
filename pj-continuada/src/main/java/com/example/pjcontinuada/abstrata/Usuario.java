package com.example.pjcontinuada.abstrata;

import com.example.pjcontinuada.models.Cargos;

public class Usuario {
    private String usuario;
    private String senha;
    private Cargos cargos;

    public Usuario(String usuario, String senha, Cargos cargos) {
        this.usuario = usuario;
        this.senha = senha;
        this.cargos = cargos;
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

    public Cargos getCargos() {
        return cargos;
    }

    public void setCargos(Cargos cargos) {
        this.cargos = cargos;
    }
}
