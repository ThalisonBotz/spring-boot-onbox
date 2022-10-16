package com.onbox.userweb.service;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.repository.ProdutoRepository;
import com.onbox.userweb.requests.ProdutoPostRequestBody;
import com.onbox.userweb.requests.ProdutoPutRequestBody;

import lombok.RequiredArgsConstructor;

import org.springframework.boot.autoconfigure.info.ProjectInfoProperties.Build;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor

public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    public List<Produto> listAll() {
        return produtoRepository.findAll();
    }

    public Produto findById(long id) { // quando nao localizar
        return produtoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto not Found "));
    }

    /**
     * @param produtoPostRequestBody
     * @return
     */
    public Produto save(ProdutoPostRequestBody produtoPostRequestBody) {
        return produtoRepository.save(Produto.builder()
                .nome(produtoPostRequestBody.getNome())
                .valor(produtoPostRequestBody.getValor())
                .quantidade(produtoPostRequestBody.getQuantidade())
                .validade(produtoPostRequestBody.getValidade())
                .fornecedor(produtoPostRequestBody.getFornecedor())
                .build());

    }

    public void delete(long id) {
        produtoRepository.delete(findById(id));
    }

    public void replace(ProdutoPutRequestBody produtoPutRequestBody) {
        Produto savedProduto = findById(produtoPutRequestBody.getId());
        Produto produto = Produto.builder()
                .id(savedProduto.getId())
                .nome(produtoPutRequestBody.getNome())
                .valor(produtoPutRequestBody.getValor())
                .quantidade(produtoPutRequestBody.getQuantidade())
                .validade(produtoPutRequestBody.getValidade())
                .fornecedor(produtoPutRequestBody.getFornecedor())
                .build();
        produtoRepository.save(produto);
    }
}
