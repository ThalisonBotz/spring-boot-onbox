package com.onbox.userweb.service;

import com.onbox.userweb.domain.Usuario;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class UsuarioService {

    private static List<Usuario> usuarios;
    // adicionar dados para exibição

    static {
        usuarios = new ArrayList<>(
                List.of(new Usuario(1L, "Thalison", "admin")));
    }

    public List<Usuario> listall() {

        return usuarios;
    }

    public Usuario findById(long id) { // quando nao localizar
        return usuarios.stream()
                .filter(usuario -> usuario.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not Found "));

    }

    public Usuario save(Usuario usuario) {
        usuario.setId(ThreadLocalRandom.current().nextLong(3, 100));
        usuarios.add(usuario);
        return usuario;

    }

    public void delete(long id) {
        usuarios.remove(findById(id));
    }

    public void replace(Usuario usuario) {

        delete(usuario.getId());
        usuarios.add(usuario);

    }
}
