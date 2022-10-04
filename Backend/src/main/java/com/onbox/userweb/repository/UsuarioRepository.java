package com.onbox.userweb.repository;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.domain.Usuario;

import java.lang.reflect.Array;
import java.util.List;

public interface UsuarioRepository {// classe do banco
    List<Usuario> listAll();
}
