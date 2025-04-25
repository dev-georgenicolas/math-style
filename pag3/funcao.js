function calcularTamanhoDaBlusa(cintura, torax) {
    if(cintura >= 68 && cintura <72 && torax >= 82 && torax <= 86){
        return 'PP';
    }
    else if (cintura >= 80 && cintura < 84 && torax >= 92 && torax <= 94) {
        return 'P'; 
    } else if (cintura >= 84 && cintura < 88 && torax >= 102 && torax <104) {
        return 'M'; 
    } else if (cintura >= 94 && cintura < 98 && torax >= 109 && torax < 111) {
        return 'G'; 
    } else if (cintura >= 98 && cintura < 102 && torax >= 111 && torax <115 ) {
        return 'GG';
    } else {
        return 'Medidas fora da tabela de tamanhos';
    }
}

var cintura = prompt("Por favor, insira a medida da sua cintura em cm:");
var torax = prompt("Por favor, insira a medida do seu tórax em cm:");

var tamanhoDaBlusa = calcularTamanhoDaBlusa(cintura, torax);

alert("O tamanho da sua blusa é: " + tamanhoDaBlusa);
