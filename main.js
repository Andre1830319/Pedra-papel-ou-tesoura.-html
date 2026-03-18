const elementos = document.querySelectorAll(".opção-jogador div > img");
let jogadorOpt = "";
let computadorOpt = "";

function resetOpacityJogador() {
    for(let i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}
function resetcomputador(opçãoComputador){
    for (let i = 0; i < opçãoComputador.length; i++){
        opçãoComputador[i].style.opacity = 0.3;
    }
}

function validarVitoria(){
    let vencedor = document.querySelector("#resultado")
    if(jogadorOpt == "pedra"){
        if(computadorOpt == "pedra"){
            vencedor.innerHTML = " o jogo foi empatado";
        }else if ( computadorOpt == 'papel'){
            vencedor.innerHTML = "o computador venceu, seu OTARIO";
        }else if(computadorOpt == 'tesoura'){
            vencedor.innerHTML = "Você venceu, de hack ate eu";
        }
    }else if (jogadorOpt == 'papel'){
    if (computadorOpt == "pedra"){
        vencedor.innerHTML = "Você venceu, de hack ate eu";
    }else if (computadorOpt == "papel"){
        vencedor.innerHTML = "o jogo foi empatado";
    }else if (computadorOpt == "tesoura"){
        vencedor.innerHTML = "o computador venceu, seu OTARIO";
    }

    }else if(jogadorOpt == 'tesoura'){
        if (computadorOpt == "pedra"){
            vencedor.innerHTML = "o computador venceu, seu OTARIO";
        }else if (computadorOpt == "papel"){
            vencedor.innerHTML = "Você venceu, de hack ate eu";
        }else if (computadorOpt == "tesoura"){
            vencedor.innerHTML = "o jogo foi empatado";
        }
    }
}

function computadorjogar() {
    let rand = Math.floor(Math.random() * 3);
    const opçãoComputador = document.querySelectorAll(".opção-computador div > img");
    resetcomputador(opçãoComputador)

    for (let i = 0; i < opçãoComputador.length; i++){
        if(i == rand){
            opçãoComputador[i].style.opacity = 1;
            computadorOpt = opçãoComputador[i].getAttribute("opt");
        }
    }
     validarVitoria();
}

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("click", function (t) {
        resetOpacityJogador();

        t.target.style.opacity = 1;
        jogadorOpt = t.target.getAttribute("opt");
        computadorjogar();
    });
}