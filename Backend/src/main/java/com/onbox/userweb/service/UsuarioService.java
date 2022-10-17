package com.onbox.userweb.service;

import com.onbox.userweb.domain.Usuario;
import com.onbox.userweb.repository.UsuarioRepository;
import com.onbox.userweb.requests.UsuarioPostRequestBody;
import com.onbox.userweb.requests.UsuarioPutRequestBody;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor

public class UsuarioService {

    private final UsuarioRepository usuarioRepository;

    public List<Usuario> listall() {
        return usuarioRepository.findAll();
    }

    public Usuario findById(long id) { // quando nao localizar
        return usuarioRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "User not Found "));
    }

    /**
     * @param usuarioPostRequestBody
     * @return
     */
    public Usuario save(UsuarioPostRequestBody usuarioPostRequestBody) {
        return usuarioRepository.save(Usuario.builder()
                .nome(usuarioPostRequestBody.getNome())
                .senha(usuarioPostRequestBody.getSenha())
                .email(usuarioPostRequestBody.getEmail())
                .build());

    }

    public void delete(long id) {
        usuarioRepository.delete(findById(id));
    }

    public void replace(UsuarioPutRequestBody usuarioPutRequestBody) {
        Usuario savedUsuario = findById(usuarioPutRequestBody.getId());
        Usuario usuario = Usuario.builder()
                .id(savedUsuario.getId())
                .nome(usuarioPutRequestBody.getNome())
                .senha(usuarioPutRequestBody.getSenha())
                .email(usuarioPutRequestBody.getEmail())
                .build();
        usuarioRepository.save(usuario);
    }
}
