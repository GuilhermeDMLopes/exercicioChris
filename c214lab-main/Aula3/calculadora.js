const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(valor1, valor2) {
        const validateValor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateValor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        //console.log("Validate", validateValor1);
        //console.log("Validate", validateValor2);
        if((validateValor1 !== undefined) && (validateValor2 !== undefined) ){
            return 'Error';
        }
        var p = valor1 + valor2;
        return p;
    },

    subtracao(valor1, valor2) {
        const validateValor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateValor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        //console.log("Validate", validateValor1);
        //console.log("Validate", validateValor2);
        if((validateValor1 !== undefined) || (validateValor2 !== undefined) ){
            return 'Error';
        }
        var p = valor1 - valor2;
        return p;
    },

    multiplicacao(valor1, valor2) {
        const validateValor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateValor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        //console.log("Validate", validateValor1);
        //console.log("Validate", validateValor2);
        if((validateValor1 !== undefined) || (validateValor2 !== undefined) ){
            return 'Error';
        }
        var p = valor1 * valor2;
        return p;
    },

    divisao(valor1, valor2) {
        const validateValor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateValor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        //console.log("Validate", validateValor1);
        //console.log("Validate", validateValor2);
        if((validateValor1 !== undefined) || (validateValor2 !== undefined) || valor2 == 0){
            return 'Error';
        }
        var p = valor1 / valor2;
        return p;
    },

    logbasev1(valor1, valor2) {
        const validateValor1 = validate({ valor1 },  CalculadoraConstraint.calculadoraConstraint);
        const validateValor2 = validate({ valor2 },  CalculadoraConstraint.calculadoraConstraint);
        //console.log("Validate", validateValor1);
        //console.log("Validate", validateValor2);
        if((validateValor1 !== undefined) && (validateValor2 !== undefined) ){
            return 'Error';
        }
        var p = valor1 ** valor2;
        return p;
    }
};

module.exports = Calculadora;