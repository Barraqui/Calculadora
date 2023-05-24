const currentOperationText = document.querySelector("#current-operation");


function number(num) {
    let numero = currentOperationText.innerHTML;
    currentOperationText.innerHTML = numero + num;
}

function clean() {
    currentOperationText.innerHTML = ""; 
}

function back() {
    let apagar = currentOperationText.innerHTML
    currentOperationText.innerHTML = apagar.substring(0, -1);
}

function calcular() {
    let resultado = currentOperationText.innerHTML;
    if(resultado) {
        currentOperationText.innerHTML = eval(resultado);
    } else {
        currentOperationText.innerHTML = "Resultado indefinido"
    }
}