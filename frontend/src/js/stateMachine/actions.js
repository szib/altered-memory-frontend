const incrementScore = (context, event) => {
  context.score += 1;
};

const initCards = (context, event) => {
  const cards = [];
  for (let index = 0; index < 16; index++) {
    const card = {
      id: index,
      kind: index % 8,
      image: `./images/card${index % 8}.svg`,
      selected: false,
      found: true,
    };
    cards.push(card);
  }
  context.cards = cards;
};

const shuffleCards = (context, event) => {
  // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
  const cards = [...context.cards];
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  context.cards = cards;
};

const log = (context, event) => {
  console.log('context :', context);
  console.log('event :', event);
};

const logEvent = (context, event) => {
  console.log(event);
};

const actions = {
  initCards,
  shuffleCards,
  log,
  logEvent,
  incrementScore,
};

export default actions;
