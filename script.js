const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation');

let leftSide = null;
let rigthSide = null;
let operator = null;

function mathematicalSigns(value) {
    if(leftSide) {
        operator = value;
        previousOperationText.innerHTML = leftSide + operator;
        currentOperationText.innerHTML = "";
    }     
}

function number(num) {
    currentOperationText.innerHTML += num

    if(!operator) {
        leftSide = currentOperationText.innerHTML;
    } else {
        rigthSide = currentOperationText.innerHTML;
    }
}

function calcular() {
    if(rigthSide) {
        let resultado;

        switch(operator) {
            case ' + ':
            resultado = Number(leftSide) + Number(rigthSide);
                break;
            case ' - ':
                resultado = Number(leftSide) - Number(rigthSide);
                break;
            case ' * ':
                resultado = Number(leftSide) * Number(rigthSide);
                break;
            case ' / ':
                if(rigthSide == 0) {
                    resultado = "Não é possível dividir por zero";
                } else {
                    resultado = Number(leftSide) / Number(rigthSide);
                }
                break;
            case ' % ':
                resultado = Number(leftSide) / Number(rigthSide) * 100;
                break;
        }
        if(resultado === undefined) {
            resultado = "";
        }
        currentOperationText.innerHTML = resultado;
        previousOperationText.innerHTML = leftSide + operator + rigthSide + " =";
        leftSide = resultado;
    }
}

function clean() {
    previousOperationText.innerHTML = "";
    currentOperationText.innerHTML = "";
    leftSide = null;
    rigthSide = null;
    operator = null;
}

function back() {
    let apagar = currentOperationText.innerHTML
    currentOperationText.innerHTML = apagar.substring(0, apagar.length - 1);
}
