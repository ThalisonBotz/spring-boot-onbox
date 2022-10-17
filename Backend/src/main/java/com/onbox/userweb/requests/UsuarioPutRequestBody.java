package com.onbox.userweb.requests;

import lombok.Data;

@Data
public class UsuarioPutRequestBody {
    private Long id;
    private String nome;
    private String senha;
    private String email;
}
