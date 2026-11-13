let cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let score = 0;
let modoLupaAtivo = false;
let tamanhoFonteAtual = 14;

const dadosPersonalidades = {

  1: {
    nome: "Adélia Domingues",
    carta: "./res/carta-1.png",
    bio: "Adélia Domingues é uma artesã e escritora gaúcha nascida em 1935, natural de Pinheiro Machado/RS e residente em Florianópolis desde 1996. Interrompeu seus estudos aos 14 anos, para trabalhar em uma fazenda e voltou a estudar apenas aos 60 anos de idade, na modalidade EJA (Educação de Jovens e Adultos) oferecida por meio do programa NETI-UNAPI (Núcleo de Estudos da Terceira Idade - Universidade Aberta para Pessoas Idosas) da UFSC. Em 2025, lançou seu primeiro livro “Construída em Retalhos” onde conta um pouco de sua biografia e incentiva as pessoas a buscarem conhecimento sempre, independente da idade. Atualmente, Adélia ministra oficinas de fuxico, frequenta aulas de teatro e ginástica e tem uma banca na feira de artesanato da Lagoa da Conceição."
  },
  2: {
    nome: "Alexandra Alencar",
    carta: "./res/carta-2.png",
    bio: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum neque at luctus nibh finibus facilisis dapibus etiam interdum tortor ligula congue sollicitudin erat viverra ac tincidunt nam porta elementum a enim euismod quam justo lectus commodo augue arcu dignissim velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper rutrum gravida cras eleifend turpis fames primis vulputate ornare sagittis vehicula praesent dui felis venenatis ultrices proin libero feugiat tristique accumsan maecenas potenti ultricies habitant morbi senectus netus suscipit auctor curabitur facilisi."
  },
  3: {
    nome: "Antonieta de Barros",
    carta: "./res/carta-3.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor."
  },
  4: {
    nome: "Ildefonso Juvenal",
    carta: "./res/carta-4.png",
    bio: "Ildefonso Juvenal (1894-1965) foi um escritor, pesquisador, orador, militar e farmacêutico florianopolitano, primeiro homem negro a graduar-se em uma universidade em Santa Catarina, no curso de Farmácia, em 1924. Publicou obras de diversos gêneros literários, além de artigos para jornais e periódicos de Santa Catarina, Paraná, Rio Grande do Sul e São Paulo. Foi sócio do Instituto Histórico e Geográfico Catarinense; um dos fundadores do Centro Cívico e Recreativo José Boiteux, associação que lutava pela cidadania e contra a discriminação racial; membro correspondente do Centro de Letras do Paraná e da Academia Riograndense de Letras. A Lei 6.463, de 1984, instituiu a medalha de Mérito Intelectual 'Major Ildefonso Juvenal', para ser concedida ao 1º colocado no Curso de Aperfeiçoamento de Oficiais da Polícia Militar."
  },
  5: {
    nome: "Luciana de Freitas Silveira",
    carta: "./res/carta-5.png",
    bio: "Biografia da Personalidade 5."
  },
  6: {
    nome: "Neide Maria Rosa",
    carta: "./res/carta-6.png",
    bio: "Neide Maria Rosa (1936-1994), multiartista florianopolitana com destaque na MPB. Iniciou carreira musical aos 14 anos e interpretou diversos estilos. Seu repertório denuncia racismos, afirma a identidade negra e as vivências do morro. Na década de 60, manteve intenso contato com artistas de MPB, sendo premiada em festivais e cantando no Copacabana Palace (RJ). Primeira intérprete de “Rancho do Amor à Ilha”, oficializada como hino de Florianópolis. Gravou um único disco, “Eu Sou Assim”, em homenagem aos florianopolitanos. Faleceu em 1994, deixando um importante legado para a história da música catarinense. Em 2004, o G.R.E.S. Consulado escreveu um enredo exaltando sua trajetória. Em 2023, foi homenageada com a Medalha Cruz e Sousa, a maior honraria cultural de Santa Catarina."
  },
  7: {
    nome: "Neli Góes Ribeiro",
    carta: "./res/carta-7.png",
    bio: "Biografia da Personalidade 7."
  },
  8: {
    nome: "Trajano Margarida",
    carta: "./res/teste-8.png",
    bio: "Biografia da Personalidade 8."
  },
  9: {
    nome: "William Conceição",
    carta: "./res/carta-8.png",
    bio: "Biografia da Personalidade 9."
  }
};


function updateScore() {
  document.getElementById("score").textContent = "Pontuação: " + score;
}

function flipCard({ target: clickedCard }) {
  let cardElement = clickedCard.closest('.card');
  if (!cardElement || disableDeck) return;

  if (modoLupaAtivo) {
    if (cardElement.classList.contains("flip")) {
      let idPersonagem = cardElement.getAttribute("data-id");
      let imgUrl = cardElement.querySelector(".back-view img").src;
      abrirPopUpBiografia(idPersonagem, imgUrl);
    }
    return;
  }

  if (disableDeck || cardElement === cardOne || cardElement.classList.contains("flip")) return;

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


function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    score++;
    updateScore();

    criarExplosao(cardOne);
    criarExplosao(cardTwo);
    cardOne.classList.add("acertou");
    cardTwo.classList.add("acertou");

    let idAcertado = cardOne.getAttribute("data-id");
    let urlImagemAcertada = img1;

    setTimeout(() => {
      abrirPopUpBiografia(idAcertado, urlImagemAcertada);
    }, 650);

    if (matched == 9) {
      setTimeout(() => {
        fecharZoom();
        shuffleCard();
      }, 4500);
    }
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

function criarExplosao(cartaElemento) {
  const rect = cartaElemento.getBoundingClientRect();
  const centroX = rect.left + rect.width / 2;
  const centroY = rect.top + rect.height / 2;

  const cores = ["#ff9900", "#ff4444", "#ffffff", "#ffcc00", "#fd8295"];
  const quantidadeParticulas = 35;

  for (let i = 0; i < quantidadeParticulas; i++) {
    const particula = document.createElement("div");
    particula.classList.add("particula");

    particula.style.left = `${centroX}px`;
    particula.style.top = `${centroY}px`;
    particula.style.background = cores[Math.floor(Math.random() * cores.length)];

    const tamanhoAleatorio = 10 + Math.random() * 10;
    particula.style.width = `${tamanhoAleatorio}px`;
    particula.style.height = `${tamanhoAleatorio}px`;

    const angulo = Math.random() * Math.PI * 2;
    const distancia = 80 + Math.random() * 140;
    const movimentoX = Math.cos(angulo) * distancia;
    const movimentoY = Math.sin(angulo) * distancia;

    particula.style.setProperty("--x", `${movimentoX}px`);
    particula.style.setProperty("--y", `${movimentoY}px`);

    document.body.appendChild(particula);

    setTimeout(() => {
      particula.remove();
    }, 800);
  }
}

function toggleModoLupa() {
  modoLupaAtivo = !modoLupaAtivo;
  const btn = document.getElementById("btn-lupa");
  if (modoLupaAtivo) {
    btn.textContent = "Lupa: ON";
    btn.style.background = "#ff4444";
  } else {
    btn.textContent = "Lupa: OFF";
    btn.style.background = "rgb(167, 1, 26)";
  }
}

function abrirPopUpBiografia(id, imgUrl) {
  const info = dadosPersonalidades[id] || { nome: "Personalidade", bio: "Biografia não encontrada." };

  document.getElementById("img-zoom").src = imgUrl;
  document.getElementById("texto-zoom").textContent = info.nome;
  document.getElementById("biografia-zoom").textContent = info.bio;
  document.getElementById("modal-zoom").style.display = "flex";
}

function lerBiografia() {
  window.speechSynthesis.cancel();

  const nome = document.getElementById("texto-zoom").textContent;
  const bio = document.getElementById("biografia-zoom").textContent;
  const textoCompleto = `${nome}. ${bio}`;

  const fala = new SpeechSynthesisUtterance(textoCompleto);
  fala.lang = "pt-BR";
  fala.rate = 1.0;
  fala.pitch = 1.0;

  const btnOuvir = document.getElementById("btn-ouvir");
  if (btnOuvir) {
    btnOuvir.textContent = "Falando...";
    fala.onend = () => {
      btnOuvir.textContent = "Ouvir Texto";
    };
  }

  window.speechSynthesis.speak(fala);
}


function mudarTamanhoFonte(alteracao) {
  const bioElemento = document.getElementById("biografia-zoom");
  if (!bioElemento) return;

  tamanhoFonteAtual += alteracao;

  if (tamanhoFonteAtual < 12) tamanhoFonteAtual = 12;
  if (tamanhoFonteAtual > 26) tamanhoFonteAtual = 26;

  bioElemento.style.fontSize = `${tamanhoFonteAtual}px`;
}

function fecharZoom() {
  window.speechSynthesis.cancel();
  const btnOuvir = document.getElementById("btn-ouvir");
  if (btnOuvir) btnOuvir.textContent = "Ouvir Texto";
  
  document.getElementById("modal-zoom").style.display = "none";
}

document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    const modal = document.getElementById("modal-zoom");

    if (modal && modal.style.display === "flex") {
      fecharZoom();
    }
  }
});

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
    card.classList.remove("flip", "shake", "acertou");
    let numeroCarta = arr[i];

    card.setAttribute("data-id", numeroCarta);

    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `./res/carta-${numeroCarta}.png`;

    card.removeEventListener("click", flipCard);
    card.addEventListener("click", flipCard);
  });
}

if (document.querySelector(".cards")) {
  shuffleCard();
}