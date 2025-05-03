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
