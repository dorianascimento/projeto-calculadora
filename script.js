// variaveis de controle
let numero = '';
let numeroTotal;
let resultadoGeral = 0;
let equacao = 0;
let clique = false;

// variaveis de controle de ambiente
let resultado = document.querySelector('.resultado p');
let soma = document.querySelector('.somar');
let sub = document.querySelector('.menos');
let x = document.querySelector('.vezes');
let dividir = document.querySelector('.dividir');

// quando clicar nas teclas de números, irá aparecer na tela e guardar em uma variavel de controle
function teclaCalculadora(num) {
    
    if(clique) {
        resultado.innerHTML = '';
        clique = false;
    }

    // maximo de 6 caracteres
    if(numero.length < 6) {
        numero += num;
        resultado.innerHTML += num;
        numeroTotal = Number(numero);
    }
}

// limpar todos elementos da tela
function limparCalculadora() {
    numero = '';
    resultado.innerHTML = '';
    sub.classList.remove('selecionado');
    x.classList.remove('selecionado');
    dividir.classList.remove('selecionado');
    soma.classList.remove('selecionado');
    resultadoGeral = 0;
    numeroTotal = 0;
    clique = false;
}


function calcular() {
    switch(equacao) {
        case 1:
            soma.classList.remove('selecionado');
            resultadoGeral += numeroTotal;
            resultado.innerHTML = resultadoGeral;
            clique = true;
            numeroTotal = 0;
            numero = '';
            break;
        case 2:
            
            break;
    }
}





function somar() {
    // remover a classe selecionada
    sub.classList.remove('selecionado');
    x.classList.remove('selecionado');
    dividir.classList.remove('selecionado');

    // adicionar a classe que mostra a operação selecionada
    soma.classList.add('selecionado');

    // toda vez que for cliclado, irá somar o resultado que estava na variavel de controle para uma variavel que guarda o valor total
    resultadoGeral += numeroTotal;
    resultado.innerHTML = resultadoGeral;

    equacao = 1;
    clique = true;

    numeroTotal = 0;
    numero = '';
    
}

function divisao() {
    sub.classList.remove('selecionado');
    x.classList.remove('selecionado');
    soma.classList.remove('selecionado');

    dividir.classList.add('selecionado');

   

}

function multiplicacao() {
    sub.classList.remove('selecionado');
    dividir.classList.remove('selecionado');
    soma.classList.remove('selecionado');


    x.classList.add('selecionado');
}

function subtrair() {
    x.classList.remove('selecionado');
    dividir.classList.remove('selecionado');
    soma.classList.remove('selecionado');


    sub.classList.add('selecionado');
}