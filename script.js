// elemento do 'visor' cima
const lastOperationText = document.querySelector('#last-operation');
// elemento do 'visor' de baixo
const currentOperationText = document.querySelector('#current-operation');

// valor da esquerda da operação
let leftSide = null;
// valor da direita da operação
let rightSide = null;
// operador (meio)
let operator = null;
// variável que armazenará a função a ser executada
let operationToBeExecuted = null;

// mapeamento das funções possíveis
const operations = {

    '+': function(a, b){

        return a + b;
    },
    '-': function(a, b){

        return a - b;
    },
    '/': function(a, b){

        return a / b;
    },
    '*': function(a, b){

        return a * b;
    },
    '%': function(a, b){

        return (a / b) * 100;
    }
};

function setOperator(value){

    // atribuir operador a variável operator
    operator = value;

    // atribuir a função a ser executada posteriormente
    // operationTobeExecuted será uma das funções do mapeamento em operations
    operationToBeExecuted = operations[operator];

    // texto de cima será igual ao valor esquerdo + operador
    lastOperationText.innerHTML = leftSide + operator;

    // texto de baixo será vazio
    currentOperationText.innerHTML = '';
}

function number(value){

    currentOperationText.innerHTML += value;

    if(!operator){

        // enquanto não tiver operador está alterando o valor da esquerda
        leftSide = currentOperationText.innerHTML;

    } else {

        // depois que houver operador está alterando valor da direita
        rightSide = currentOperationText.innerHTML;
    }
}

function clean(){

    // limpa tudo

    leftSide = null;
    rightSide = null;
    operationToBeExecuted = null;
    operator = null;
    currentOperationText.innerHTML = '';
    lastOperationText.innerHTML = '';
}

function back(){

    // limpa último caractere inserido

    const content = currentOperationText.innerHTML;
    currentOperationText.innerHTML = content.substring(0, content.length - 1);
}

function calcular(){

    // quando não estiver pronto para fazer conta retorna
    if(!operator || !rightSide) return;

    // resultado é a função armazenada na variável, passando os parâmetros dos valores esquerda e direita
    const result = operationToBeExecuted(Number(leftSide), Number(rightSide));

    // atualizando o valor de cima para a função realizada
    lastOperationText.innerHTML = leftSide + operator + rightSide;

    // valor da esquerda é atualizado para o valor do resultado
    leftSide = result;

    // exibir resultado no texto de baixo
    currentOperationText.innerHTML = result;
}
