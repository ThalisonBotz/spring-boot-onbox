package academy.Onbox.springboot2.domain;

public class Produto {
    private String name;

    public Produto(String name ){
        this.name = name;
    }
    public Produto(){
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

