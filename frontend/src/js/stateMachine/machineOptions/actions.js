import { renderCards } from '../../UI';

const incrementScore = (context) => {
  context.score += 1;
};

const incrementTurn = (context) => {
  context.turn += 1;
};

const selectCard = (context, event) => {
  context.cards
    .find(card => card.id === parseInt(event.cardId, 10))
    .selected = true;
};

const isMatched = (cards) => {
  const kinds = cards
    .filter(card => card.selected === true)
    .map(card => card.kind);
  return kinds[0] === kinds[1];
};

const deselectCards = (context) => {
  if (isMatched(context.cards)) {
    context.cards.map((card) => {
      if (card.selected) {
        card.found = true;
      }
      return card;
    });
  }
  context.cards.map((card) => {
    card.selected = false;
    return card;
  });
};

const setFaceUp = (context) => {
  context.cards.map((card) => {
    card.faceUp = card.found || card.selected;
    return card;
  });
};

const initCards = (context) => {
  const cards = [];
  for (let idx = 0; idx < 16; idx += 1) {
    const card = {
      id: idx,
      kind: idx % 8,
      image: `./images/card${idx % 8}.svg`,
      selected: false,
      faceUp: false,
      found: false,
    };
    cards.push(card);
  }
  context.cards = cards;
};

const shuffleCards = (context) => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...context.cards];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  context.cards = cards;
};

const log = (context, event) => {
  // eslint-disable-next-line no-console
  console.log(`-------- Turn ${context.turn} --------`);
  // eslint-disable-next-line no-console
  console.log('context :', context);
  // eslint-disable-next-line no-console
  console.log('event :', event);
  // eslint-disable-next-line no-console
  console.log('--------------------------------------');
};

const resetContext = (context) => {
  context.score = 0;
  context.time = 0;
  context.cards = [];
  context.timerInterval = 1000;
};

const renderBoard = () => {
  renderCards();
};

const logEnd = () => {
  console.log('END 😎');
};

export default {
  initCards,
  shuffleCards,
  log,
  incrementScore,
  resetContext,
  renderBoard,
  selectCard,
  setFaceUp,
  deselectCards,
  incrementTurn,
  logEnd,
};
