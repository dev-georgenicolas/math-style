function determinarTamanhoPe(tamanhoCm) {
    if (tamanhoCm >= 20 && tamanhoCm < 21) {
        return "33";
    } else if (tamanhoCm >= 21 && tamanhoCm < 22) {
        return "34";
    } else if (tamanhoCm >= 22 && tamanhoCm < 23) {
        return "35";
    } else if (tamanhoCm >= 23 && tamanhoCm < 24) {
        return "36";
    } else if (tamanhoCm >= 24 && tamanhoCm < 25) {
        return "37";
    } else if (tamanhoCm >= 25 && tamanhoCm < 26) {
        return "38";
    } else if (tamanhoCm >= 26 && tamanhoCm < 27) {
        return "39";
    } else if (tamanhoCm >= 27 && tamanhoCm < 28) {
        return "40";
    } else if (tamanhoCm >= 28 && tamanhoCm < 29) {
        return "41";
    } else if (tamanhoCm >= 29 && tamanhoCm < 30) {
        return "42";
    } else if (tamanhoCm >= 30 && tamanhoCm < 31) {
        return "43";
    } else if (tamanhoCm >= 31 && tamanhoCm < 32) {
        return "44";
    } else if (tamanhoCm >= 32 && tamanhoCm < 33) {
        return "45";
    } else if (tamanhoCm >= 33 && tamanhoCm < 34) {
        return "46";
    } else {
        return "Não vendemos pranchas";
    }
}

function calcularTamanhoPe() {
    const tamanhoCmInput = document.getElementById('alturaInput').value;
    const tamanhoCm = parseFloat(tamanhoCmInput);
    const tamanhoPe = determinarTamanhoPe(tamanhoCm);

    // Verifica se o resultado é um número ou a mensagem "Não vendemos pranchas"
    if (isNaN(tamanhoPe) || tamanhoPe === "Não vendemos pranchas") {
        document.getElementById('alturaInput').value = '';
        document.getElementById('resultado').textContent = "Não vendemos pranchas";
    } else {
        document.getElementById('resultado').textContent = tamanhoPe;
    }
}

document.getElementById('botao').addEventListener('click', calcularTamanhoPe);

document.getElementById('alturaInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Previne o comportamento padrão do Enter (submeter o formulário)
        calcularTamanhoPe();
    }
});

