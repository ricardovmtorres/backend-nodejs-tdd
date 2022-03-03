const { expect } = require('chai');
const chai = require('chai')
//TDD com Node #02 - Fazendo Testes Unitários
const somarNumeros = (a, b) => a + b

describe('Somas', () => {
    it ('Soma de dois numeros - 2 e 3', (done) => {
        const resultado = somarNumeros(2,3);
        expect(resultado).be.equal(5);
        done();
    });
    
    it ('Soma de dois numeros - -2 e 3', (done) => {
        const resultado = somarNumeros(-2,3);
        expect(resultado).be.equal(1);
        done();
    });
});