package com.onbox.userweb.controller;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.requests.ProdutoPostRequestBody;
import com.onbox.userweb.requests.ProdutoPutRequestBody;
import com.onbox.userweb.service.ProdutoService;
import com.onbox.userweb.util.DateUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController // classe cotroler do spring mvc
@RequestMapping("produto")
@Log4j2
@RequiredArgsConstructor
public class ProdutoControler {
    private final DateUtil dateUtil;
    private final ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<List<Produto>> list() {
        log.info(dateUtil.formarLocalDateTimeToDatabaseStyle(LocalDateTime.now()));
        return new ResponseEntity<>(produtoService.listAll(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Produto> findByid(@PathVariable long id) {
        log.info(dateUtil.formarLocalDateTimeToDatabaseStyle(LocalDateTime.now()));
        return ResponseEntity.ok(produtoService.findById(id));

    }


    //busca por nome
    //localhost:8080/produto/find?nome=nome salvo no banco
    @GetMapping(path = "/find")
    public ResponseEntity<List<Produto>> findByNome(@RequestParam String nome) {
        return ResponseEntity.ok(produtoService.findByNome(nome));

    }





    @PostMapping
    public ResponseEntity<Produto> save(@RequestBody ProdutoPostRequestBody produtoPostRequestBody) {
        return new ResponseEntity<>(produtoService.save(produtoPostRequestBody), HttpStatus.CREATED);

    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        produtoService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody ProdutoPutRequestBody produtoPutRequestBody) {
        produtoService.replace(produtoPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
