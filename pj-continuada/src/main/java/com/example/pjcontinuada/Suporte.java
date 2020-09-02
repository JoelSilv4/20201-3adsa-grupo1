package com.example.pjcontinuada;

import com.example.pjcontinuada.dto.Roles;

public class Suporte extends Usuario implements UsersManager {
    public Suporte(String usuario, String senha, Roles roles) {
        super(usuario, senha, roles);
    }

    @Override
    public void recuperarSenhaUsuario() {

    }
}
