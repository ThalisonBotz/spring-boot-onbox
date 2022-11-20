package com.onbox.userweb.repository;

import com.onbox.userweb.domain.Usuario;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {// classe do banco
    List<Usuario> findByName(String name); // busca por nome

}
