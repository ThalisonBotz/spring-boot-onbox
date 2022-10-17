package com.onbox.userweb.requests;

import com.onbox.userweb.domain.Usuario;

import lombok.Data;

@Data
public class UsuarioPostRequestBody {
    private Long id;
    private String nome;
    private String senha;
    private String email;

    public Usuario save(Usuario build) {
        return null;
    }
}
