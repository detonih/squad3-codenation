/* voce devera criar um arquivo chamado media-ponderada.js e, dentro dele, calcular a media ponderada das notas abaixo.
para calcular a media ponderada voce deve multiplicar cada nota pelo seu peso e em seguida dividir a soma
pela soma dos pesos */

function mediaPonderada(nota1, nota2) {
    const pesoNota1 = 3;
    const pesoNota2 = 7;

    const media = ((nota1 * pesoNota1) + (nota2 * pesoNota2)) / (pesoNota1 + pesoNota2);

    return media;
}

console.log(mediaPonderada(5, 8));