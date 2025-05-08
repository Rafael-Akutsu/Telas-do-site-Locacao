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
  