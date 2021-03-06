import { renderCards, updateScore } from '../../UI';
import { renderLeaderboard, postResult } from '../../UI/leaderboard';
import clickSound from '../../../sound/click.mp3';
import failSound from '../../../sound/fail.mp3';
import successSound from '../../../sound/success.mp3';

const incrementScore = context => {
  context.score += 1;
};

const incrementTurn = context => {
  context.provisionalScore = Math.round(context.provisionalScore * 0.9);
  context.turn += 1;
};

const selectCard = (context, event) => {
  const selectedCard = context.cards.find(
    card => card.id === parseInt(event.cardId, 10)
  );
  if (selectedCard) selectedCard.selected = true;
};

const deselectCards = context => {
  context.cards.map(card => (card.selected = false));
};

const setFaceUp = context => {
  context.cards.map(card => {
    card.faceUp = card.found || card.selected;
    return card;
  });
};

const isMatch = cards => {
  const selectedCards = cards.filter(card => card.selected === true);
  return selectedCards[0].kind === selectedCards[1].kind;
};

const checkMatch = context => {
  if (isMatch(context.cards)) {
    playSuccessSound();
    context.score += context.provisionalScore;
    context.provisionalScore = 110;
    context.cards.map(c => {
      if (c.selected) c.found = true;
      return c;
    });
  } else {
    playFailSound();
  }
};

const initCards = context => {
  const cards = [];
  for (let idx = 0; idx < 16; idx += 1) {
    const card = {
      id: idx,
      kind: idx % 8,
      selected: false,
      faceUp: false,
      found: false
    };
    cards.push(card);
  }
  context.cards = cards;
};

const shuffleCards = context => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...context.cards];
  for (let i = cards.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  context.cards = cards;
};

const addTimeBonus = context => {
  context.score = parseInt(context.score * (60 / context.time), 10);
};

const resetContext = context => {
  context.score = 0;
  context.time = 0;
  context.cards = [];
  context.timerInterval = 1000;
};

const renderScore = context => {
  updateScore(context.score);
};

const renderBoard = context => {
  renderCards(context.cards);
};

const showLeaderBoard = context => {
  renderLeaderboard();
};

const playSound = sound => {
  const fn = () => {
    const clickSoundEl = document.createElement('audio');
    clickSoundEl.src = sound;
    clickSoundEl.play();
  };
  return fn;
};

const playClickSound = () => {
  playSound(clickSound)();
};

const playFailSound = () => {
  playSound(failSound)();
};

const playSuccessSound = () => {
  playSound(successSound)();
};

const askForName = context => {
  const name = prompt("What's your name?", 'Player One');
  context.name = name;
};

const sendResultToApi = context => {
  const payload = {
    name: context.name,
    score: context.score,
    time: context.time
  };
  postResult(payload);
};

// const logContext = (context, event) => {
//   console.log('context :', context);
// };

// const logEvent = (context, event) => {
//   console.log('event :', event);
// };

// const logEnd = () => {
//   console.log('END 😎');
// };

// const logCards = (context) => {
//   console.table(context.cards);
// };

export default {
  initCards,
  shuffleCards,
  incrementScore,
  resetContext,
  renderBoard,
  renderScore,
  selectCard,
  checkMatch,
  setFaceUp,
  deselectCards,
  incrementTurn,
  addTimeBonus,
  // logEvent,
  // logContext,
  // logEnd,
  // logCards,
  askForName,
  playClickSound,
  showLeaderBoard,
  sendResultToApi
};
