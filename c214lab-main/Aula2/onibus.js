class Onibus extends Veiculo{
    assentos;

    constructor(placa,ano,assentos){
        super(placa,ano);
        this.assentos = assentos;
    }

    setAssentos(novoAssento){
        this.assentos = novoAssento;
    }

    getAssentos(){
        this.assentos;
    }

    exibirDados(){
        console.log('Ônibus');
        super.exibirDados();
        console.log('Quantidade de assentos:',this.assentos)
    }
}

var novoOnibus = new Onibus('DEF-456',2005,40);
novoOnibus.exibirDados();