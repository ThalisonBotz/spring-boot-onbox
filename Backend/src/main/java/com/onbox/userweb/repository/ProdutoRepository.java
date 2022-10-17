package com.onbox.userweb.repository;

import com.onbox.userweb.domain.Produto;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {// classe do banco
}
