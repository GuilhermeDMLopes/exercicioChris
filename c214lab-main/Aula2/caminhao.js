class Caminhao extends Veiculo{
    eixos;

    constructor(placa,ano,eixos){
        super(placa,ano);
        this.eixos = eixos;
    }

    setEixos(novoEixo){
        this.eixos = novoEixo;
    }

    getEixos(){
        this.eixos;
    }

    exibirDados(){
        console.log('Caminhão');
        super.exibirDados();
        console.log('Quantidade de eixos: ',this.eixos);
    }
}

var novoCaminhao = new Caminhao('ABC-123',1988,8);
novoCaminhao.exibirDados();
