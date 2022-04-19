class Veiculo{
    placa;
    ano;

    constructor(placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    constructor(){
                
    }

    setPlaca(novaPlaca){
        this.placa = novaPlaca;
    }

    setAno(novoAno){
        this.ano = novoAno;
    }

    getPlaca(){
        this.placa;
    }

    getAno(){
        this.ano;
    }

    exibirDados(){
        console.log('Placa: ',this.placa)
        console.log('Ano: ',this.ano)
    }
}