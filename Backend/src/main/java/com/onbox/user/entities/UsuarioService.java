package com.onbox.user.entities;

import java.util.List;

public interface UsuarioService {
	
	public List <UsuarioService> obterTodos();
	public UsuarioService oberterPorCodigo(String codigo);
	public UsuarioService criar(UsuarioService usuario );
	

}
