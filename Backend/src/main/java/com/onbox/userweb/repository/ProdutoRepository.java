package com.onbox.userweb.repository;

import com.onbox.userweb.domain.Produto;

import java.lang.reflect.Array;
import java.util.List;

public interface ProdutoRepository {// classe do banco
    List<Produto> listAll();
}
