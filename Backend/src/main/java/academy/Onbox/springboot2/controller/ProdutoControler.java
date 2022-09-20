package academy.Onbox.springboot2.controller;


import academy.Onbox.springboot2.domain.Produto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController // classe cotroler do spring mvc
@RequestMapping("product")

public class ProdutoControler {

    //local host:8080/product/list
    @GetMapping( path =  "list")
    public List<Produto>list (){
        return List.of(new Produto ("Pastel "), new Produto ("teste "));
    }

}
