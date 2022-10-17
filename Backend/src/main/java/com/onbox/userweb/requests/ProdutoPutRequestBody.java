package com.onbox.userweb.requests;

import lombok.Data;

@Data
public class ProdutoPutRequestBody {
    private Long id;
    private String nome;
    private Double valor;
    private int quantidade;
    private String validade;
    private String fornecedor;
}
