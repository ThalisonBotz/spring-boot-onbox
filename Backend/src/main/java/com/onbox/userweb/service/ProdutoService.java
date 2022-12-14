package com.onbox.userweb.service;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.exeption.BodyRequestExeption;
import com.onbox.userweb.mapper.ProdutoMapper;
import com.onbox.userweb.repository.ProdutoRepository;
import com.onbox.userweb.requests.ProdutoPostRequestBody;
import com.onbox.userweb.requests.ProdutoPutRequestBody;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor

public class ProdutoService {

    private final ProdutoRepository produtoRepository;

    public List<Produto> listAll() {
        return produtoRepository.findAll();
    }

    public List<Produto> findByNome(String nome) {
        return produtoRepository.findByNome(nome);
    } //busca por nome





    public Produto findById(long id) { // quando nao localizar
        return produtoRepository.findById(id)
                .orElseThrow(() -> new BodyRequestExeption( "Produto not Found "));
    }

    /**
     * @param produtoPostRequestBody
     * @return
     */
    public Produto save(ProdutoPostRequestBody produtoPostRequestBody) {

        return produtoRepository.save(ProdutoMapper.INSTANCE.toProduto(produtoPostRequestBody));

    }

    public void delete(long id) {
        produtoRepository.delete(findById(id));
    }

    public void replace(ProdutoPutRequestBody produtoPutRequestBody) {
        Produto savedProduto = findById(produtoPutRequestBody.getId());
        Produto produto = ProdutoMapper.INSTANCE.toProduto(produtoPutRequestBody);
        produto.setId(savedProduto.getId()); 


       /*  saiu isso , depois apaga esses comentarios
        Produto produto = Produto.builder()
                .id(savedProduto.getId())
                .nome(produtoPutRequestBody.getNome())
                .valor(produtoPutRequestBody.getValor())
                .quantidade(produtoPutRequestBody.getQuantidade())
                .validade(produtoPutRequestBody.getValidade())
                .fornecedor(produtoPutRequestBody.getFornecedor())
                .build();*/

        produtoRepository.save(produto);


    }
}
