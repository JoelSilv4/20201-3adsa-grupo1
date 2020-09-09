package com.example.pjcontinuada.models;

import com.example.pjcontinuada.abstrata.Usuario;
import com.example.pjcontinuada.interfaces.UsersManager;

import java.util.List;

public class Suporte extends Usuario implements UsersManager {
    public Suporte(String usuario, String senha, Cargos roles) {
        super(usuario, senha, roles);
    }

    @Override
    public String recuperarSenhaUsuario(String usuario, List<Usuario> listUsuario) {
        for (int x = 0; x < listUsuario.size(); x++) {
            if (listUsuario.get(x).getSenha().equals(usuario)) {
                return listUsuario.get(x).getSenha();
            }
        }

        return "Login não existe";
    }
}
