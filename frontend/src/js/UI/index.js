import gameService from '../stateMachine';
import { cardImages, backImage } from './images';

const board = document.querySelector('#board');

const initButtons = () => {
  const newGameBtn = document.querySelector('#newGameBtn');
  newGameBtn.addEventListener('click', (e) => {
    gameService.send('NEW_GAME');
    renderCards();
  });

  const quitBtn = document.querySelector('#quitBtn');
  quitBtn.addEventListener('click', (e) => {
    gameService.send('QUIT_GAME');
  });

  const stateBtn = document.querySelector('#stateBtn');
  stateBtn.addEventListener('click', (e) => {
    console.log('gameService.state.value :', gameService.state.value);
  });
};

const createCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.classList.add(`card-${card.kind}`);

  const cardStyle = card.found
    ? `background-image: url(${cardImages[card.kind]})`
    : `background-image: url(${backImage})`;
  cardEl.style = cardStyle;

  cardEl.innerHTML = '';
  cardEl.dataset.id = card.id;
  cardEl.dataset.kind = card.kind;
  return cardEl;
};

const click = (e) => {
  console.log(e.target);
  gameService.send('CLICK', { cardId: e.target.dataset.kind });
  console.log('gameService.state.value :', gameService.state.value);
};

const renderCards = () => {
  board.innerHTML = '';
  const { cards } = gameService.state.context;
  for (let index = 0; index < cards.length; index++) {
    const card = createCard(cards[index]);
    card.addEventListener('click', click);
    board.appendChild(card);
  }
};

export const start = () => {
  initButtons();
};
