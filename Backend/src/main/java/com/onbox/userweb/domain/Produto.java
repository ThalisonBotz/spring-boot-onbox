package com.onbox.userweb.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data // para usar os get e set
@AllArgsConstructor

public class Produto {
    private Long Id;
    private String nome;
    private Double Valor;
    private int Quantidade;
    private String Validade;
    private String Fornecedor;
}
