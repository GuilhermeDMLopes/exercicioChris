const Constants = require('../src/utils/Constants');
const Delete = require('../src/utils/delete');

test('Caso válido', () => {
    const result = Delete.delete({
        nome: "Guilherme",
        forca: "100",
        origem: "srs",
        poder: "Fogo"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Delete.delete({
        forca: "100",
        origem: "srs",
        poder: "Fogo"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

test('Caso inválido - Retirando poder', () => {
    const result = Delete.delete({
        nome: "Guilherme",
        forca: "100",
        origem: "srs"
    });    
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});