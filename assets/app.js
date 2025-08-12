let numeroSecreto = gerarNumeroAleatório();
console.log(numeroSecreto);
let tentativas = 1;

function gerarNumeroAleatório(){
    return parseInt(Math.random() * 100 + 1);
}

function alterarTexto(id, texto){
    document.getElementById(id).innerText = texto;  
}

function verificarChute(){
    console.log("O botão funcionou")
    let chute = Number(document.querySelector('input').value);
    let astroCerto = document.getElementById("astrocerto");
    let astroErrado = document.getElementById("astroerrado");
    let astro = document.getElementById("astro");
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
        alterarTexto('mensagem', `Parabéns`);
        alterarTexto('dicas', `Você acertou o número com ${tentativas} ${palavraTentativa}`);
        astroCerto.src = "../img/astronauta_certo.png";
        astroCerto.style.display = "block";
        astro.style.display = "none"
        astroErrado.style.display = "none"
    }else{
        if(chute > numeroSecreto){
            alterarTexto('dicas', `O número secreto é menor que ${chute}`);
        }else{
            alterarTexto('dicas', `O número secreto é maior que ${chute}`);
        }
        tentativas++
        astroErrado.src = "../img/astronauta_errado.png";
        astroErrado.style.display = "block";
        astro.style.display = "none"
    }
}

function limpar(){
chute = document.querySelector('input');
chute.value = '';
let astroCerto = document.getElementById("astrocerto");
let astroErrado = document.getElementById("astroerrado");
let astro = document.getElementById("astro");
astroCerto.style.display = "none"
astro.style.display = "block"
}   


function reiniciarJogo(){
    console.log("O botão funcionou");
    numeroSecreto = gerarNumeroAleatório();
    tentativas = 1
    alterarTexto('mensagem', "Jogo do número secreto");
    alterarTexto('dicas', "Escolha um número de 1 a 100");
    limpar();
}