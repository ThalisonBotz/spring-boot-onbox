package com.onbox.userweb.requests;

import lombok.Data;

@Data
public class ProdutoPostRequestBody {
    private String name;
    private Long id;
    private String nome;
    private Double valor;
    private int quantidade;
    private String validade;
    private String fornecedor;
}
