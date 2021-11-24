let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//criar ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);

    /* atribuir a ordem ao proximo numero */
    order[order.length] = colorOrder;
    clickedOrder = [];

    /* acender a cor q corresponde ao numero sorteado */
    for (const i in order) {
        /* cada elemento posicao i cada loop */
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i +1));
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for (const i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}

//função para o clique do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
       createColorElement(color).classList.remove('selected'); 
       checkOrder();
    }, 250);

    
}

//criar uma função que retorne a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;    
    }else if(color == 2){
        return yellow;    
    }else if(color == 3){
        return blue;
    }
}


//função para proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função para game over
let gameOver = () => {
    alert(`Pontuação ${score}!\nVocê perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder - [];

    playGame();
}


//funcão inicio do jogo
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando novo jogo!")
    score = 0;

    nextLevel();
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicio do jogo
playGame();





