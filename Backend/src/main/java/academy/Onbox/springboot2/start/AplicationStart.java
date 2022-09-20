package academy.Onbox.springboot2.start;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@EnableAutoConfiguration
@ComponentScan(basePackages = "academy.Onbox.springboot2")// tira o erro 404
public class AplicationStart {
    public static void main(String [] args){
        SpringApplication.run(AplicationStart.class);


    }
}
