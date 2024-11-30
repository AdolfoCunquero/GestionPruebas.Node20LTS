const { sumar } = require('../../src/calculadora');

describe('Pruebas de la función sumar', () => {
  test('Debe retornar 5 cuando sumamos 2 y 3', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('Debe retornar 0 cuando sumamos -1 y 1', () => {
    expect(sumar(-1, 1)).toBe(10);
  });
});
