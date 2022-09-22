package com.onbox.userweb.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data  //para usar os get e set
@AllArgsConstructor

public class Produto {
    private Long id;
    private String name;

}

