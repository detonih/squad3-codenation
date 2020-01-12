/* TDD -> primeiro escreve-se o teste e depois o algoritmo */

/* Abaixo de 17	Muito abaixo do peso
Entre 17 e 18,49	Abaixo do peso
Entre 18,5 e 24,99	Peso normal
Entre 25 e 29,99	Acima do peso
Entre 30 e 34,99	Obesidade I
Entre 35 e 39,99	Obesidade II (severa)
Acima de 40	Obesidade III (mórbida) */

const init = (weight, height) => {
    const result = calculate(weight, height);
    
    if(result < 17) {
        return 'Muito abaixo do peso'
    } else if(result >= 17 && result <= 18.49) {
        return 'Abaixo do peso';
    } else if (result >= 18.5 && result <= 24.99) {
        return 'Peso normal';
    }
}

const calculate = (weight, height) => {
    return parseInt(weight / (height**2));
}


module.exports = {
    init,
    calculate,
}