package com.onbox.userweb.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data // para usar os get e set
@AllArgsConstructor

public class Produto {
    private Long id;
    private String nome;
    private Double valor;
    private int quantidade;
    private String validade;
    private String fornecedor;
}
