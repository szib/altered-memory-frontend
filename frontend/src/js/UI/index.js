import { cardImages, backImage } from './images';

let service;

export const updateTimer = (time) => {
  const timerEl = document.querySelector('#timer');
  timerEl.textContent = time;
};

export const updateScore = (score) => {
  const scoreEl = document.querySelector('#score');
  scoreEl.textContent = score;
};

export const initNavbar = () => {
  const navBarEl = document.querySelector('#navbar');
  const newGameBtn = navBarEl.querySelector('#newGameBtn');
  newGameBtn.addEventListener('click', (e) => {
    service.send('NEW_GAME');
  });

  const quitBtn = navBarEl.querySelector('#quitBtn');
  quitBtn.addEventListener('click', (e) => {
    service.send('QUIT_GAME');
  });

  const stateBtn = navBarEl.querySelector('#stateBtn');
  stateBtn.addEventListener('click', (e) => {
    console.log('service.state.value :', service.state.value);
  });

  // const peekBtn = navBarEl.querySelector('#peekBtn');
  // peekBtn.addEventListener('click', (e) => {
  //   // const cards = service.state.context.cards.map(card => card.kind);
  //   const cards = service.state.context.cards.map((card) => {
  //     if (card.kind != 0) {
  //       card.found = true;
  //     }
  //     return card;
  //   });
  //   console.table(cards);
  //   service.state.context.cards = cards;
  //   renderCards();
  // });
};

const createCard = (card) => {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');

  const cardStyle = card.faceUp
    ? `background-image: url(${cardImages[card.kind]})`
    : `background-image: url(${backImage})`;
  cardEl.style = cardStyle;

  if (card.faceUp === false) {
    cardEl.classList.add('card-face-down');
  }

  cardEl.innerHTML = '';
  cardEl.dataset.id = card.id;
  cardEl.dataset.kind = card.kind;
  return cardEl;
};

const click = (e) => {
  service.send('CLICK_ON_CARD', { cardId: e.target.dataset.id });
};

export const renderCards = (cards) => {
  const board = document.querySelector('#board');
  board.innerHTML = '';
  if (cards.length > 0) {
    for (let index = 0; index < cards.length; index++) {
      const card = createCard(cards[index]);
      card.addEventListener('click', click);
      board.appendChild(card);
    }
  }
};

export const startWith = (passedService) => {
  service = passedService;
  initNavbar();
};
