const notSelected = (context, event) => {
  const id = parseInt(event.cardId, 10);
  return context.cards.find(card => card.id === id).selected === false;
};

const allFound = context => context.cards
  .filter(card => card.found === true).length === 16;

const guards = {
  notSelected,
  allFound,
};

export default guards;
