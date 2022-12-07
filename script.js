// variaveis de controle
let numeroTotal = '';
let numeroTela = '';
let resultadoFinal = 0;
let positivo = false;

// pegar elemento DOM
let telaResultado = document.querySelector('.resultado');
let soma = document.querySelector('.soma');
let dividir = document.querySelector('.dividir');
let vezes = document.querySelector('.vezes');
let menos = document.querySelector('.menos');


// começa o programa com o valor 0 mostrando na calculadora
telaResultado.innerHTML = resultadoFinal;

// FUNÇÕES
// função para guardar o numero teclado e mostrar ele na tela
function mostrarNumero(e) {
    let numeroApertado = e.target.getAttribute('data-number');
    
    if(soma.classList.contains('selecionado')) {
        soma.classList.remove('selecionado');
    } else if(vezes.classList.contains('selecionado')) {
        vezes.classList.remove('selecionado');
    } else if(dividir.classList.contains('selecionado')) {
        dividir.classList.remove('selecionado'); 
    } else if(menos.classList.contains('selecionado')){
        menos.classList.remove('selecionado');
    }

    // se o numero total for menor que o max-digitos, podera ser iserido
    if(numeroTela.length < 6) {
        numeroTotal += `${numeroApertado}`;
        numeroTela += `${numeroApertado}`;
    }

    telaResultado.innerHTML = numeroTela;
    resultadoFinal = Number(numeroTotal);
}
// função para limpar calculadora
function limparCalculadora() {
    numeroTela = '';
    numeroTotal = '';
    telaResultado.innerHTML = numeroTotal;
    resultadoFinal = 0;
    telaResultado.innerHTML = resultadoFinal;
    positivo = false;
    soma.classList.remove('selecionado');
    dividir.classList.remove('selecionado');
    vezes.classList.remove('selecionado');
    menos.classList.remove('selecionado');
}
// função para transformar o numero em negativo e positivo
function transformarNegativo() {
    if(positivo) {
        resultadoFinal = Math.abs(resultadoFinal);
        telaResultado.innerHTML = resultadoFinal;
        
        positivo = false;
    } else {
        resultadoFinal -= (resultadoFinal * 2);
        telaResultado.innerHTML = resultadoFinal;

        positivo = true;
    }
}
// função para calcular porcentagem
function calcularPorcentagem() {
    resultadoFinal = (resultadoFinal / 100);
    telaResultado.innerHTML = resultadoFinal;

    numeroTotal = '';
}
// função para receber o tipo da operação clicada e enviar para a função de calculo
function selecionarOperacao(tipo) {
    soma.classList.remove('selecionado');
    dividir.classList.remove('selecionado');
    vezes.classList.remove('selecionado');
    menos.classList.remove('selecionado');

    switch(tipo) {
        case '+':
            soma.classList.add('selecionado');
            numeroTotal += tipo;
            console.log(numeroTotal);
            break;
            case '-':
                menos.classList.add('selecionado');
                numeroTotal += tipo;
                console.log(numeroTotal);
                break;
            case '*':
                vezes.classList.add('selecionado');
                numeroTotal += tipo;
                console.log(numeroTotal);
                break;
            case '/':
                dividir.classList.add('selecionado');
                numeroTotal += tipo;
                console.log(numeroTotal);
                break;
    }

    numeroTela = '';
}
// mudar o bt de apagar calculadora quando for clicado algum numero
function mudarBt() {
    if(numeroTotal.length >= 1) {
        document.querySelector('.limpar').innerHTML = 'C';
    } else {
        document.querySelector('.limpar').innerHTML = 'AC';
    }
}
// calcular e mostrar o resultado
function calcularConta() {
    resultadoFinal = eval(numeroTotal);
    telaResultado.innerHTML = resultadoFinal;
}


//EVENTOS
document.body.addEventListener('click', mudarBt);
document.querySelector('.conta').addEventListener('click', calcularConta);
document.querySelector('.porcentagem').addEventListener('click', calcularPorcentagem);
document.querySelector('.negativo').addEventListener('click', transformarNegativo);
document.querySelector('.limpar').addEventListener('click', limparCalculadora);
for(let i = 0; i < 11; i++) {
    let numeros = document.querySelectorAll('.botao.numero')[i];
    numeros.addEventListener('click', mostrarNumero);
}

