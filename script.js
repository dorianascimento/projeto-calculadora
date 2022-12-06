// variaveis de controle
let numeroTotal = '';
let resultadoFinal = 0;
let positivo = false;

let telaResultado = document.querySelector('.resultado');


// começa o programa com o valor 0 mostrando na calculadora
telaResultado.innerHTML = resultadoFinal;



// FUNÇÕES
// função para guardar o numero teclado e mostrar ele na tela
function mostrarNumero(e) {
    let numeroApertado = e.target.getAttribute('data-number');
    
    // se o numero total for menor que o max-digitos, podera ser iserido
    if(numeroTotal.length < 6) {
        numeroTotal += `${numeroApertado}`;
    }

    telaResultado.innerHTML = numeroTotal;
    resultadoFinal = Number(numeroTotal);
}
// função para limpar calculadora
function limparCalculadora() {
    numeroTotal = '';
    telaResultado.innerHTML = numeroTotal;
    resultadoFinal = 0;
    telaResultado.innerHTML = resultadoFinal;
    positivo = false;
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

//EVENTOS
document.querySelector('.porcentagem').addEventListener('click', calcularPorcentagem);
document.querySelector('.negativo').addEventListener('click', transformarNegativo);
document.querySelector('.limpar').addEventListener('click', limparCalculadora);
for(let a = 0; a < 19; a++) {
    let numerosClique = document.querySelectorAll('.botao.clique')[a];
    numerosClique.addEventListener('click', (e)=>{
        // animação de clique no botão 
        numerosClique.classList.add('b-t');
        setTimeout(()=>{
            numerosClique.classList.remove('b-t');
        },250);
    });
}
for(let i = 0; i < 11; i++) {
    let numeros = document.querySelectorAll('.botao.numero')[i];
    numeros.addEventListener('click', mostrarNumero);
}

