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
    foto: "./res/foto-1.png",
    bio: "Adélia Domingues é uma artesã e escritora gaúcha nascida em 1935, natural de Pinheiro Machado/RS e residente em Florianópolis desde 1996. Interrompeu seus estudos aos 14 anos, para trabalhar em uma fazenda e voltou a estudar apenas aos 60 anos de idade, na modalidade EJA (Educação de Jovens e Adultos) oferecida por meio do programa NETI-UNAPI (Núcleo de Estudos da Terceira Idade - Universidade Aberta para Pessoas Idosas) da UFSC. Em 2025, lançou seu primeiro livro “Construída em Retalhos” onde conta um pouco de sua biografia e incentiva as pessoas a buscarem conhecimento sempre, independente da idade. Atualmente, Adélia ministra oficinas de fuxico, frequenta aulas de teatro e ginástica e tem uma banca na feira de artesanato da Lagoa da Conceição."
  },
  2: {
    nome: "Alexandra Alencar",
    carta: "./res/carta-2.png",
    foto: "./res/foto-2.png",
    bio: "Alexandra Eliza Vieira Alencar, (Xanda Alencar), nascida em 20 de agosto de 1982, em Florianópolis, Santa Catarina é professora universitária, artista, dançarina,antropóloga, jornalista, Rainha do Maracatu Arrasta Ilha, batuqueira do Baque Mulher Floripa, mãe do Nagô e do Irê.  Graduou-se  em jornalismo em 2006 na UFSC, fez mestrado (2009), doutorado (2015) e pós-doutorado (2018-2020) em Antropologia Social na UFSC. É professora e Coordenadora do departamento de Antropologia e no Departamento de pós graduação em Antropologia na UFSC,  pesquisadora do Núcleo de Identidades e Relações Interétnicas da UFSC (NUER/UFSC) e do Núcleo de Identidades de Gênero e Subjetividades da UFSC (NIGS/UFSC). Coordenadora do Programa de ensino, pesquisa e extensão Ebó Epistêmico. Linha de pesquisa: Diáspora Africana e educação afro-brasileira. Em 2022 recebe o Prêmio Mulheres na Ciência - Edição Especial Cientistas Negras da UFSC na Categoria Plena. Em 2023 recebe a medalha Antonieta de Barros pela Câmara Municipal em Florianópolis."
  },
  3: {
    nome: "Enedina Alves Marques",
    carta: "./res/carta-3.png",
    foto: "./res/foto-3.png",
    bio: "Nascida em Curitiba, Paraná, no dia 13/01/1913, faleceu em agosto de 1981. Era filha de escravizados libertos que viviam na periferia da capital paranaense no período pós-abolição. Foi professora e a primeira engenheira negra do Brasil, numa época que a univerisade não era pensada para mulheres e negros, e para além de esforço tido teve algumas oportunidades, pois fora matriculada em uma escola pelo empregador de sua mãe.Durante a sua trajetória, colaborou com obras significativas no Paraná como a Usina Capivari-Cachoeira, que é a maior central hidrelétrica subterrânea do sul do Brasil, e atualmente é chamada de Usina Governador Pedro Viriato Parigot de Souza, em Antonina, e o Colégio Estadual do Paraná, Casa do Estudante Universitário (CEU), situada ao lado do Colégio Estadual, uma das maiores residências estudantis da região Sul. Enedina Marques, serviu de exemplo para sua família e inspira mulheres e meninas até hoje, tanto que sua história inspirou a escritora  Lindamir Salete Casagrande a escrever o livro infantil: 'Enedina Marques: mulher negra, pioneira na engenharia brasileira'. O livro faz parte da série 'Meninas, Moças e Mulheres que Inspiram', publicada pela Editora Inverso. "
  },
  4: {
    nome: "Ildefonso Juvenal",
    carta: "./res/carta-4.png",
    foto: "./res/foto-4.png",
    bio: "Ildefonso Juvenal (1894-1965) foi um escritor, pesquisador, orador, militar e farmacêutico florianopolitano, primeiro homem negro a graduar-se em uma universidade em Santa Catarina, no curso de Farmácia, em 1924. Publicou obras de diversos gêneros literários, além de artigos para jornais e periódicos de Santa Catarina, Paraná, Rio Grande do Sul e São Paulo. Foi sócio do Instituto Histórico e Geográfico Catarinense; um dos fundadores do Centro Cívico e Recreativo José Boiteux, associação que lutava pela cidadania e contra a discriminação racial; membro correspondente do Centro de Letras do Paraná e da Academia Riograndense de Letras. A Lei 6.463, de 1984, instituiu a medalha de Mérito Intelectual 'Major Ildefonso Juvenal', para ser concedida ao 1º colocado no Curso de Aperfeiçoamento de Oficiais da Polícia Militar."
  },
  5: {
    nome: "Luciana de Freitas Silveira",
    carta: "./res/carta-5.png",
    foto: "./res/foto-5.png",
    bio: "Luciana de Freitas Silveira é gaúcha nascida em Rosário do Sul- RS, radicada em Florianópolis, Santa Catarina, há mais de 27 anos. Reside no  Maciço do Morro da Cruz, mãe de dois filhos e avó de três crianças. Graduada  em Licenciatura em Ciências Sociais na Universidade Federal de Santa Catarina - UFSC, possui mestrado em Educação PPGE também na UFSC. Filiada ao Partido dos Trabalhadores (PT), foi candidata a vereadora em 2020, militante do Direito à Cidade, a territorialidade e as questões das mulheres negras, quilombolas, periféricas e trans. É conhecida como 'Lupretafreiras' no Instagram, é integrante do  Movimento Negro Unificado de Santa Catarina, fundadora do grupo de mulheres intitulado Escutação, que busca a dialogar sobre as violências vividas pelas mulheres, membra do Grupo de Trabalho da Educação Quilombola de Santa Catarina. Pertence ao grupo de pesquisa Núcleo Infância, Comunicação, Cultura e Arte (PPGE/CED/CNPq). Em sua trajetória trabalhou como empregada doméstica ingressando na universidade aos 36 anos, onde  percebeu que seus sonhos eram possíveis, fez mestrado e atualmente é doutoranda."
  },
  6: {
    nome: "Neide Mariarrosa",
    carta: "./res/carta-6.png",
    foto: "./res/foto-6.png",
    bio: "Neide Maria Rosa (1936-1994), multiartista florianopolitana com destaque na MPB. Iniciou carreira musical aos 14 anos e interpretou diversos estilos. Seu repertório denuncia racismos, afirma a identidade negra e as vivências do morro. Na década de 60, manteve intenso contato com artistas de MPB, sendo premiada em festivais e cantando no Copacabana Palace (RJ). Primeira intérprete de “Rancho do Amor à Ilha”, oficializada como hino de Florianópolis. Gravou um único disco, “Eu Sou Assim”, em homenagem aos florianopolitanos. Faleceu em 1994, deixando um importante legado para a história da música catarinense. Em 2004, o G.R.E.S. Consulado escreveu um enredo exaltando sua trajetória. Em 2023, foi homenageada com a Medalha Cruz e Sousa, a maior honraria cultural de Santa Catarina."
  },
  7: {
    nome: "Neli Góes Ribeiro",
    carta: "./res/carta-7.png",
    foto: "./res/foto-7.png",
    bio: "Professora Neli Góes Ribeiro (1942) é pedagoga, educadora e uma figura histórica do movimento negro em Santa Catarina. Nasceu em Florianópolis, filha de manezinhos, e foi nora do primeiro vereador negro da capital. Casou-se com o primeiro delegado negro do estado, e aos 30 anos, já mãe de dois filhos, decidiu retomar os estudos. Formou-se em Pedagogia pela UFSC e fez especialização na área. Tornou-se professora titular da UDESC, dedicando sua carreira aos fundamentos da educação, à história das populações negras e às relações raciais. Foi pioneira na instituição, sendo a primeira pró-reitora negra de Extensão da UDESC. Também foi uma das fundadoras do primeiro Núcleo de Estudos Afro-Brasileiros (NEAB) de Santa Catarina e do Brasil, um marco importante para a visibilidade e o ensino de temas relacionados à história negra. Na década de 1980, co-fundou a Associação de Mulheres Negras Antonieta de Barros, lutando contra a segregação racial na cidade e exigindo representatividade nos espaços públicos e no mercado de trabalho. "
  },
  8: {
    nome: "Trajano Margarida",
    carta: "./res/carta-8.png",
    foto: "./res/foto-8.png",
    bio: "Trajano Margarida (1889–1946), nascido em Desterro (hoje Florianópolis), meses antes da Proclamação da República, foi poeta, músico, professor e uma das personalidades mais vibrantes da cultura catarinense. Neto de Geralda, uma mulher escravizada homenageada em seus versos, teve uma infância simples ao lado da mãe, a quem ajudava vendendo amendoim torrado pelas ruas da capital antes de ingressar no magistério e no serviço público. Durante as décadas de 1920 e 1930, sua voz marcante e seu violão embalaram as serestas boêmias e o carnaval de Florianópolis, onde organizou cordões e compôs marchinhas reunidas na obra Canções Carnavalescas (1930). Além de publicar cerca de noventa poemas e diversos livros independentes, dedicou-se à preservação das canções populares do estado com o projeto Trovas Catarinenses. \nAtivista engajado na luta contra a discriminação racial e pelos direitos civis da população negra, foi um dos fundadores do Centro Cívico e Recreativo José Boiteux (1920), instituição que presidiu por duas vezes. Sua intensa atuação social, cultural e esportiva também marcou a criação do Figueirense Futebol Clube (1921) e do Centro Catarinense de Letras (1925)."
  },
  9: {
    nome: "Willian Conceição",
    carta: "./res/carta-9.png",
    foto: "./res/foto-9.png",
    bio: "Willian Luiz da Conceição nasceu em Joinville (SC). Ele transita entre a História e a Antropologia Social para investigar como as heranças coloniais moldam as desigualdades contemporâneas no Brasil e nas Américas. Com formação pela UDESC, UFSC e doutorado pelo Museu Nacional (UFRJ), ele atualmente se dedica, em seu pós-doutorado na USP, a reconstruir a biografia e as redes intelectuais, políticas e afetivas de Léon-Gontran Damas, uma figura central do movimento da Negritude. Ele é autor do livro Branquitude: dilema racial brasileiro (Papéis Selvagens, 2020). Sua pesquisa aborda relações raciais, memória, desigualdades em saúde e alimentação, além dos processos de assimilação e lutas anticoloniais na Guiana Francesa e no Caribe. Esses temas foram aprofundados em seus pós-doutorados. Além de professor do departamento de antropologia da UFSC, Willian participa de coletivos como NUER, NuCEC, Instituto Kadila e Ebó Epistêmico. Seu trabalho também dialoga com a história pública e os direitos humanos, marcado por sua experiência no acolhimento humanitário junto à Agência da ONU para as Migrações (OIM). "
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

function abrirLightbox(urlImagem) {
  const lightbox = document.getElementById("lightbox-foto");
  const imgLightbox = document.getElementById("img-lightbox");

  if (lightbox && imgLightbox) {
    imgLightbox.src = urlImagem;
    lightbox.style.display = "flex";
  }
}

function fecharLightbox() {
  const lightbox = document.getElementById("lightbox-foto");
  if (lightbox) {
    lightbox.style.display = "none";
  }
}


document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    const lightbox = document.getElementById("lightbox-foto");
    if (lightbox && lightbox.style.display === "flex") {
      fecharLightbox();
      return;
    }

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
    imgTag.src = `./res/foto-${numeroCarta}.png`;

    card.removeEventListener("click", flipCard);
    card.addEventListener("click", flipCard);
  });
}

if (document.querySelector(".cards")) {
  shuffleCard();
}