package com.example.pjcontinuada;

import com.example.pjcontinuada.dto.Roles;

public class Admin extends Usuario implements UsersManager {

    public Admin(String usuario, String senha, Roles roles) {
        super(usuario, senha, roles);
    }

    @Override
    public void recuperarSenhaUsuario() {

    }
}
