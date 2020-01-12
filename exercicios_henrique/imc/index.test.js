const { init, calculate } = require('./index.js');
//destructuring, eu pego só a propriedades do arquivo index.js, que saão exportados pelo module.exporst
//como um objeto, por isso eu digo que são propriedades, que por sua vez sao as funções do arquivo index.js

describe('IMC Calculator' , () => {
    test('Result should match ImC table', () => {
        expect(calculate(65, 1.70)).toBe(22)
        //expect(calculate(100, 1.50)).toBe(44)
    });

    test('Result should indicate person\'s condition', () => {
        expect(init(65, 1.70)).toBe('Peso normal')
    });
});

