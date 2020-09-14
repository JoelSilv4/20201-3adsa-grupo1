package com.example.pjcontinuada.models;

import com.example.pjcontinuada.abstrata.Usuario;

public class Cliente extends Usuario {
    public Cliente(String usuario, String senha, Cargos roles) {
        super(usuario, senha, roles);
    }

    public void criarItinerario() {}
}
