const { expect } = require('chai');
const chai = require('chai')

describe('Somas', () => {
    it ('Soma de dois numeros - 2 e 3', (done) => {
        const resultado = somarNumeros(2,3);
        expect(resultado).be.equal(5);
        done();
    });
});