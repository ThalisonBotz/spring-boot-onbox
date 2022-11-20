package com.onbox.userweb.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.onbox.userweb.domain.Produto;
import com.onbox.userweb.requests.ProdutoPostRequestBody;
import com.onbox.userweb.requests.ProdutoPutRequestBody;

@Mapper(componentModel = "spring")
public abstract class ProdutoMapper {

    public final static ProdutoMapper INSTANCE = Mappers.getMapper(ProdutoMapper.class);
    //metodoo para chamar os  abstract

 public abstract Produto toProduto(ProdutoPostRequestBody ProdutoPostRequestBody);
 public abstract Produto toProduto(ProdutoPutRequestBody ProdutoPutRequestBody);



}
