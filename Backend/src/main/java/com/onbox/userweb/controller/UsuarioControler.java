package com.onbox.userweb.controller;

import com.onbox.userweb.domain.Usuario;
import com.onbox.userweb.requests.UsuarioPostRequestBody;
import com.onbox.userweb.requests.UsuarioPutRequestBody;
import com.onbox.userweb.service.UsuarioService;
import com.onbox.userweb.util.DateUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController // classe cotroler do spring mvc
@RequestMapping("usuario")
@Log4j2
@RequiredArgsConstructor
public class UsuarioControler {
    private final DateUtil dateUtil;
    private final UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> list() {
        log.info(dateUtil.formarLocalDateTimeToDatabaseStyle(LocalDateTime.now()));
        return new ResponseEntity<>(usuarioService.listall(), HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Usuario> findByid(@PathVariable long id) {
        log.info(dateUtil.formarLocalDateTimeToDatabaseStyle(LocalDateTime.now()));
        return ResponseEntity.ok(usuarioService.findById(id));

    }



//busca por name
    @GetMapping(path = "/find")
    public ResponseEntity<List<Usuario>> findByNome(@RequestParam String nome) {
        return ResponseEntity.ok(usuarioService.findByNome(nome));

    }





    @PostMapping
    public ResponseEntity<Usuario> save(@RequestBody UsuarioPostRequestBody usuarioPostRequestBody) {
        return new ResponseEntity<>(usuarioService.save(usuarioPostRequestBody), HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        usuarioService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping
    public ResponseEntity<Void> replace(@RequestBody UsuarioPutRequestBody usuarioPutRequestBody) {
        usuarioService.replace(usuarioPutRequestBody);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
