// Load Main Game Button
window.addEventListener('load', () => {
    const startButton = document.getElementById('start-btn');
    const container = document.getElementById('container');
    const header = document.getElementById('header');
    const gameContainer = document.getElementById('game-container');
    const footer = document.querySelector('footer');
  
    startButton.addEventListener('click', () => {
      container.style.display = 'none';
      header.style.display = 'flex';
      gameContainer.classList.remove('hidden');
      footer.classList.remove('hidden');
    });
  });
  
// Start New Game
const startActualGameBtn = document.getElementById('play-btn');
const gameGridContainer = document.getElementById('grid-game-container');

startActualGameBtn.addEventListener ('click',
    function () {
      generateGrid();
    }
)

// Function to generate the grid
function generateGrid() {

  for (let i = 1; i <= 100; i++) {
    const gameCell = createElement('div', 'bomb-cell');
    const cellNumber = createElement('span', 'cell-number');
    cellNumber.textContent = i; // Set the cell number

    gameCell.addEventListener('click', function () {
      gameCell.classList.toggle('cell-selected');
    });

    gameCell.appendChild(cellNumber); // Append the number element to the cell
    gameGridContainer.appendChild(gameCell);
  }
}

// Function to create new Element
function createElement (tagName, className) {
  const cellElement = document.createElement(tagName);
  cellElement.className += className;
  return cellElement;
}

