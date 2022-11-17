package com.onbox.userweb.service;

import com.onbox.userweb.domain.Produto;
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

    public Produto findById(long id) { // quando nao localizar
        return produtoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Produto not Found "));
    }

    /**
     * @param produtoPostRequestBody
     * @return
     */
    public Produto save(ProdutoPostRequestBody produtoPostRequestBody) {
        // adicionei dentro do salve  ProdutoMapper.INSTANCE.toProduto(animePostRequestBody) 
        //ta acusando erro no vscode 
/* o que foi apagado do save 
 * ) Produto.builder()
                .nome(produtoPostRequestBody.getNome())
                .valor(produtoPostRequestBody.getValor())
                .quantidade(produtoPostRequestBody.getQuantidade())
                .validade(produtoPostRequestBody.getValidade())
                .fornecedor(produtoPostRequestBody.getFornecedor())
                .build());
 */

        return produtoRepository.save(ProdutoMapper.INSTANCE.toProduto(animePostRequestBody));

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
