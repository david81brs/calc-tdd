const { assert } = require('chai');
const calculadora = require('../src/calculadora');

describe('Calculadora', () => {
  const resultSoma = calculadora.soma(1, 2);
  const expectSoma = 3;
  const resultSubt = calculadora.subtrai(3, 2);
  const expectSubt = 1;
  const resultMult = calculadora.multiplica(2, 2);
  const expectMult = 4;
  const resultDivi = calculadora.divide(4, 2);
  const expectDivi = 2;
  const resultDivz = calculadora.divide(4, 0);
  const expectDivz = null;
  const resultPower = calculadora.power(2,3);
  const expectPower = 8;

  describe('function soma()', () => {
    it('Calculadora.soma() should sum two numbers', () => {
      assert.equal(resultSoma, expectSoma);
    });
    it('Calculadora.soma() should return a number', () => {
      assert.typeOf(resultSoma, 'number');
    });
  });
  describe('function subtrair()', () => {
    it('Calculadora.subtrai() should subtract two numbers', () => {
      assert.equal(resultSubt, expectSubt);
    });
    it('Calculadora.subtrai() sould return a number', () => {
      assert.typeOf(resultSubt, 'number');
    });
  });
  describe('function multiplica()', () => {
    it('Calculadora.multiplica() should multiply two numbers', () => {
      assert.equal(resultMult, expectMult);
    });
    it('Calculadora.multiplica() should return a number', () => {
      assert.typeOf(resultMult, 'number');
    });
  });
  describe('function divide()', () => {
    it('Calculadora.divide() should divide two numbers', () => {
      assert.equal(resultDivi, expectDivi);
    });
    it('Calculadora.divide() should return a number', () => {
      assert.typeOf(resultDivi, 'number');
    });
    it('Calculadora.divide() should return null if b=0', () => {
      assert.equal(resultDivz, expectDivz);
    });
  });
  describe('function power()', ()=>{
    it('Calculadora.power() should return x^y', () => {
      assert.equal(resultPower, expectPower);
    });
    it('Calculadora.power() should return a number', () => {
      assert.typeOf(resultPower, 'number');
    });
  });
});
