const cards = document.querySelectorAll('.card');
const positions = ['card-left2', 'card-left1', 'card-center', 'card-right1', 'card-right2'];

function moveLeft() {
  const first = positions.shift();
  positions.push(first);
  updateClasses();
}

function moveRight() {
  const last = positions.pop();
  positions.unshift(last);
  updateClasses();
}

function updateClasses() {
  cards.forEach((card, index) => {
    card.className = 'card ' + positions[index];
  });
}

updateClasses();


//Lançamentos


  document.addEventListener("DOMContentLoaded", function () {
    const lancInner = document.querySelector('.lancamentos-inner');
    const lancCards = document.querySelectorAll('.lanc-card');
    const direita = document.querySelector('.lanc-seta.direita');
    const esquerda = document.querySelector('.lanc-seta.esquerda');
    const cardsPorGrupo = 4;
    let grupoAtual = 0;
  
    function atualizarLancamentos() {
      const totalGrupos = Math.ceil(lancCards.length / cardsPorGrupo);
      const cardWidth = lancCards[0].offsetWidth + 20; // 20 = gap
      const deslocamento = grupoAtual * cardWidth * cardsPorGrupo;
      lancInner.style.transform = `translateX(-${deslocamento}px)`;
    }

    direita.addEventListener('click', () => {
      const totalGrupos = Math.ceil(lancCards.length / cardsPorGrupo);
      grupoAtual = (grupoAtual + 1) % totalGrupos;
      atualizarLancamentos();
    });

    esquerda.addEventListener('click', () => {
      const totalGrupos = Math.ceil(lancCards.length / cardsPorGrupo);
      grupoAtual = (grupoAtual - 1 + totalGrupos) % totalGrupos;
      atualizarLancamentos();
    });

    window.addEventListener('resize', atualizarLancamentos);
    atualizarLancamentos();
  });
  

  function trocarImagem(el) {
    document.getElementById('main-image').src = el.src;
  }

  function trocarImagem(el) {
    // Troca a imagem principal
    const mainImage = document.getElementById('main-image');
    mainImage.src = el.src;

    // Remove destaque anterior
    const miniaturas = document.querySelectorAll('.thumbnail-carousel img');
    miniaturas.forEach(img => img.classList.remove('active-thumb'));

    // Adiciona destaque na nova miniatura
    el.classList.add('active-thumb');
  }

  function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fecha o dropdown ao clicar fora
document.addEventListener("click", function (e) {
  const icon = document.querySelector(".profile-icon");
  const menu = document.getElementById("dropdownMenu");

  if (!icon.contains(e.target)) {
    menu.style.display = "none";
  }
});
