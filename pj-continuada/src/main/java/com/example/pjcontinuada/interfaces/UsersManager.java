package com.example.pjcontinuada.interfaces;

import com.example.pjcontinuada.abstrata.Usuario;

import java.util.List;

public interface UsersManager {
    public String recuperarSenhaUsuario(String usuario, List<Usuario> listUsuario);
}
