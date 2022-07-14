const X = "X";
const O = "O";
let jogador;
checarTurno = true;
let empate = 0
vencedor = false;
let quadrado = document.querySelectorAll('.quadrado-jogo');





                                                   //------------------------------Função que alterna entre jogadores------------------------
function vezJogador() {
    marcarJogadorAtivo("X");

    turno = checarTurno ? X : O
    console.log(turno);
    checarTurno = !checarTurno;
    console.log(checarTurno);


    if (checarTurno == false) {
        marcarJogadorAtivo(O);
        jogador = X;

    }
    if (checarTurno == true) {

        jogador = O;
        marcarJogadorAtivo(X);
    }
}

function desenhaJogador(posicaoLinha, posicaoColuna) {
    if (jogador == X) {
        desenharSimbolo(X, posicaoLinha, posicaoColuna);
        empate++;
        
    }
    if (jogador == O) {
        desenharSimbolo(O, posicaoLinha, posicaoColuna);
        empate++;
    }
}
                                                   //------------------------------Spaghetti de if's para verificação de vitória------------------------
function vitoriaVertical() {
    // L = linha. C = Coluna
    let L1C1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
    let L2C1 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
    let L3C1 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
    
    if (L1C1.textContent === L2C1.textContent && L1C1.textContent === L3C1.textContent && L2C1.textContent === L3C1.textContent && L1C1.textContent != "" && L2C1.textContent != "" && L3C1.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

    let L1C2 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
    let L2C2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
    let L3C2 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);

    if (L1C2.textContent === L2C2.textContent && L1C2.textContent === L3C2.textContent && L2C2.textContent === L3C2.textContent && L1C2.textContent != "" && L2C2.textContent != "" && L3C2.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

    let L1C3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
    let L2C3 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);
    let L3C3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);

    if (L1C3.textContent === L2C3.textContent && L1C3.textContent === L3C3.textContent && L2C3.textContent === L3C3.textContent && L1C3.textContent != "" && L2C3.textContent != "" && L3C3.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

}

function vitoriaHorizontal() {
    // L = linha. C = Coluna
    let C1L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
    let C2L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${2}']`);
    let C3L1 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);

    if (C1L1.textContent === C2L1.textContent && C1L1.textContent === C3L1.textContent && C2L1.textContent === C3L1.textContent && C1L1.textContent != "" && C2L1.textContent != "" && C3L1.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

    let C1L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${1}']`);
    let C2L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
    let C3L2 = document.querySelector(`[data-linha='${2}'][data-coluna='${3}']`);

    if (C1L2.textContent === C2L2.textContent && C1L2.textContent === C3L2.textContent && C2L2.textContent === C3L2.textContent && C1L2.textContent != "" && C2L2.textContent != "" && C3L2.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

    let C1L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);
    let C2L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${2}']`);
    let C3L3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);

    if (C1L3.textContent === C2L3.textContent && C1L3.textContent === C3L3.textContent && C2L3.textContent === C3L3.textContent && C1L3.textContent != "" && C2L3.textContent != "" && C3L3.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

}

function vitoriaDiagonal() {
    // D = Diagonal. L = linha. C = Coluna
    let DL1C1 = document.querySelector(`[data-linha='${1}'][data-coluna='${1}']`);
    let DL2C2 = document.querySelector(`[data-linha='${2}'][data-coluna='${2}']`);
    let DL3C3 = document.querySelector(`[data-linha='${3}'][data-coluna='${3}']`);


    if (DL1C1.textContent === DL2C2.textContent && DL1C1.textContent === DL3C3.textContent && DL2C2.textContent === DL3C3.textContent && DL1C1.textContent != "" && DL2C2.textContent != "" && DL3C3.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }

    let DL1C3 = document.querySelector(`[data-linha='${1}'][data-coluna='${3}']`);
    let DL3C1 = document.querySelector(`[data-linha='${3}'][data-coluna='${1}']`);

    if (DL1C3.textContent === DL2C2.textContent && DL1C3.textContent === DL3C1.textContent && DL2C2.textContent === DL3C1.textContent && DL1C3.textContent != "" && DL2C2.textContent != "" && DL3C1.textContent != "") {
        exibirResultado(`Jogador ${jogador} venceu!`);
        vencedor = true;
        console.log("foi");
    }
}

                                                   //------------------------------Verifica empate------------------------
function empatou() {

    if (empate == 9 && vencedor == false) {
        exibirResultado("Deu Velha!");
    }
}


                                                   //------------------------------Reload------------------------
function reiniciarJogo() {
    location.reload()
}



function selecionarArea(posicaoLinha, posicaoColuna) {

    vezJogador();
    desenhaJogador(posicaoLinha, posicaoColuna);
    vitoriaVertical();
    vitoriaHorizontal();
    vitoriaDiagonal();
    empatou();
}
