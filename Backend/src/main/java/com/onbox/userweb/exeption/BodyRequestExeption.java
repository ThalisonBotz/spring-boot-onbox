package com.onbox.userweb.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)//retorna o status do http 

public class BodyRequestExeption extends RuntimeException {
    public BodyRequestExeption(String message) {
        super(message);

    }
}
