package com.onbox.user.entities;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping

public class UsuarioControler {
@GetMapping("/{codigo} ")
public void oberterCodigo(@PathVariable Long codigo ) {
	
}

	@PostMapping
	public void criar(@RequestBody Object Usuario) {
		
		
	}
	
	
	
}
