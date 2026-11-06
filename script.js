let cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let score = 0;
let modoLupaAtivo = false;

function updateScore() {
  document.getElementById("score").textContent = "Pontuação: " + score;
}

function flipCard({ target: clickedCard }) {
  let cardElement = clickedCard.closest('.card');
  if (!cardElement || disableDeck) return;

  if (modoLupaAtivo) {
    if (cardElement.classList.contains("flip")) {
      let imgUrl = cardElement.querySelector(".back-view img").src;
      abrirZoom(imgUrl);
    }
    return; 
  }

  if (cardElement === cardOne) return;

  if (!cardElement.classList.contains("flip")) {
    cardElement.classList.add("flip");

    if (!cardOne) {
      cardOne = cardElement;
      return;
    }

    cardTwo = cardElement;
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
  document.getElementById("modal-zoom").style.display = "none";
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";

  let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    card.classList.remove("flip", "shake");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `./res/teste-${arr[i]}.png`;

    card.removeEventListener("click", flipCard);
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();
