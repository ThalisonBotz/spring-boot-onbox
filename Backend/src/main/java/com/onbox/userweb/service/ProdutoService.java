package com.onbox.userweb.service;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.repository.ProdutoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.annotation.ResponseStatusExceptionResolver;

import java.util.List;

@Service
public class ProdutoService {

private List <Produto> produto = List.of(new Produto (1L, "produto 1" ), new Produto (2L, "produto 2"));
// adicionar dados para exibição

public List<Produto> listall() {

        return produto;
    }

    public Produto findById(long id) { //quando nao localizar
      return produto.stream()
              .filter(produto -> produto.getId().equals(id))
              .findFirst()
                      .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST , "Produto not Found "));


    }
}
