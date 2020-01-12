/* dada uma lisa de numeros de 0 a 50, escreve um algoritmo que separe os numeros 
pares dos numeros impares */

const oddOrEven = (inicio, fim) => {
    const arrOdd = [];
    const arrEven = [];
    let i = inicio
    
    for(i ; i <= fim; i++) {
        (i % 2 === 0) ? arrEven.push(i) : arrOdd.push(i);
    }
    return [arrEven, arrOdd];
}

function outPut(parametro) {
    console.log('Even numbers: ' + parametro[0]);
    console.log('odd numbers: ' + parametro[1])
}

outPut(oddOrEven(0, 50));
console.log(oddOrEven(0, 50))

//console.log(oddOrEven(1, 50));