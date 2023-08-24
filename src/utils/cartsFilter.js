const SHORTFILM = 40;

export function cardsFilter(cards, searchString, shortFilter, handleSetNotFount) {
  let filteredCards = nameFilter(cards, searchString);

  if (shortFilter) {
    filteredCards = durationFilter(filteredCards);
  }

  filteredCards.length === 0 ? handleSetNotFount(true) : handleSetNotFount(false);
  return filteredCards;
}

const nameFilter = (cards, searchString) => {
  return cards.filter((card) => {
    const isContainInRu = generalization(card.nameRU).includes(generalization(searchString));
    const isContainInEn = generalization(card.nameEN).includes(generalization(searchString));

    return isContainInRu || isContainInEn;
  });
}

const durationFilter = (cards) => {
  return cards.filter((card) => {
    return card.duration <= SHORTFILM;
  });
}

const generalization = (str) => {
  return String(str).toLowerCase().trim();
}
