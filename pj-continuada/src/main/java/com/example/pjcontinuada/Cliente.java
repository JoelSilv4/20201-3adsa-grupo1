package com.example.pjcontinuada;

import com.example.pjcontinuada.dto.Roles;

public class Cliente extends Usuario {
    public Cliente(String usuario, String senha, Roles roles) {
        super(usuario, senha, roles);
    }
}
