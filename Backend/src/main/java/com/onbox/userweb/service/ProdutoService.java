package com.onbox.userweb.service;

import com.onbox.userweb.domain.Produto;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
public class ProdutoService {

private static List <Produto> produtos;
// adicionar dados para exibição

    static{
produtos =  new ArrayList<>(List.of(new Produto (1L, "produtos 1" ), new Produto (2L, "produtos 2")));


    }
public List<Produto> listall() {

        return produtos;
    }

    public Produto findById(long id) { //quando nao localizar
      return produtos.stream()
              .filter(produto -> produto.getId().equals(id))
              .findFirst()
                      .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST , "Produto not Found "));

    }

    public Produto save(Produto produto) {
    produto.setId(ThreadLocalRandom.current().nextLong(3,100));
    produtos.add(produto);
  return produto ;

    }

    public void delete(long id) {
        produtos.remove(findById(id));
    }

    public void replace(Produto produto) {

        delete(produto.getId());
        produtos.add(produto);


    }
}
