let cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let score = 0;

function updateScore() {
  document.getElementById("score").textContent = "Pontuação: " + score;
}

function flipCard({ target: clickedCard }) {
  
  let cardElement = clickedCard.closest('.card');
  
  // SE O MODO LUPA ESTIVER ATIVO: Mostra a imagem ampliada e interrompe o jogo
  if (modoLupaAtivo && cardElement) {
    let imgUrl = cardElement.querySelector(".back-view img").src;
    abrirZoom(imgUrl);
    return; // Impede que a carta conte na lógica do jogo da memória
  }
  
  if (cardOne !== clickedCard && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    score++;
    updateScore();
    if (matched == 9) {
      setTimeout(() => {
        return shuffleCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

let modoLupaAtivo = false;

// Função para ligar/desligar o modo acessibilidade
function toggleModoLupa() {
  modoLupaAtivo = !modoLupaAtivo;
  const btn = document.getElementById("btn-lupa");
  if (modoLupaAtivo) {
    btn.textContent = "🔍 Modo Lupa: ON";
    btn.style.background = "#ff4444";
  } else {
    btn.textContent = "🔍 Modo Lupa: OFF";
    btn.style.background = "rgb(253, 130, 149)";
  }
}

function abrirZoom(imgUrl) {
  document.getElementById("img-zoom").src = imgUrl;
  document.getElementById("modal-zoom").style.display = "flex";
}

// Fecha o pop-up
function fecharZoom() {
  document.getElementById("modal-zoom").style.style.display = "none";
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `./res/teste-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
