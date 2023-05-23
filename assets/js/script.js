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

startActualGameBtn.addEventListener ('click',
    function () {
      
      const gameGridContainer = document.getElementById('grid-game-container');

      for (let i = 0; i < 100; i++) {
        const gameCell = createElement('div', 'bomb-cell');
        
        gameGridContainer.appendChild(gameCell);
      }
    }
)

// Function to create new Element
function createElement (tagName, className) {
  const cellElement = document.createElement(tagName);
  cellElement.className += className;
  return cellElement;
}

