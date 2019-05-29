const selectable = (context, event) => {
  const id = parseInt(event.cardId, 10);
  const card = context.cards.find(card => card.id === id);
  return card.selected === false && card.faceUp === false;
};

const allFound = context => context.cards
  .filter(card => card.found === true).length === 16;

const guards = {
  selectable,
  allFound,
};

export default guards;
