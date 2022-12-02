let numeroTotal = '';


// função para guardar o numero teclado e mostrar ele na tela
function mostrarNumero(e) {
    let telaResultado = document.querySelector('.resultado');
    let numeroApertado = e.target.getAttribute('data-number');
    
    // se o numero total for menor que o max-digitos, podera ser iserido
    if(numeroTotal.length < 6) {
        numeroTotal += `${numeroApertado}`;
    }

    telaResultado.innerHTML = numeroTotal;
}

// adicionando evento de clique nos botoes com numeros
for(let a = 0; a < 19; a++) {
    let numerosClique = document.querySelectorAll('.botao')[a];
    numerosClique.addEventListener('click', (e)=>{
        numerosClique.classList.add('b-t');
        setTimeout(()=>{
            numerosClique.classList.remove('b-t');
        },500);
    });
}
for(let i = 0; i < 11; i++) {
    let numeros = document.querySelectorAll('.botao.numero')[i];
    numeros.addEventListener('click', mostrarNumero);
}



