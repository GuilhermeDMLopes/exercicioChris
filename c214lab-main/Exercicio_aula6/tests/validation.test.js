const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        nome: "Guilherme",
        forca: "100",
        origem: "srs",
        poder: "Fogo"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        forca: "100",
        origem: "srs",
        poder: "Fogo"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando força', () => {
    const result = Validation.create({
        nome: "Guilherme",        
        origem: "srs",
        poder: "Fogo"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando origem', () => {
    const result = Validation.create({
        nome: "Guilherme",
        forca: "100",        
        poder: "Fogo"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando poder', () => {
    const result = Validation.create({
        nome: "Guilherme",
        forca: "100",
        origem: "srs"        
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});