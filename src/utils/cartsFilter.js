import { SHORT_FILM_LENGTH } from './const';

export function cardsFilter(
  cards,
  searchString,
  shortFilter,
  handleSetNotFount,
  savedCards,
  currentUser) {

  // console.group('Фильтрация');
  // console.log(cards);
  // console.log(searchString);
  // console.log(shortFilter);
  // console.log(savedCards);
  // console.groupEnd();

  let filteredCards = nameFilter(cards, searchString);

  if (shortFilter) {
    filteredCards = durationFilter(filteredCards);
  }

  filteredCards.length === 0 ? handleSetNotFount(true) : handleSetNotFount(false);

  if (filteredCards !== 0) {

    if (savedCards.length !== 0) filteredCards = setFlagSaved(filteredCards, savedCards);

    localStorage.setItem(`user-${ currentUser.email }`,
      JSON.stringify({cards: filteredCards, string: searchString, short: shortFilter}));
  }

  return filteredCards;
}

export function setFlagSaved(filteredCards, savedCards) {
  // console.group('Установка флага: входящие массивы');
  // console.log(filteredCards);
  // console.log(savedCards);
  // console.groupEnd();

  const cards = filteredCards.map((filteredCard) => {

    let isFound = false;
    savedCards.forEach((savedCard) => {
      if (filteredCard.id === savedCard.movieId) isFound = true;
    });

    isFound ? filteredCard.isSaved = true : filteredCard.isSaved = false;

    return filteredCard;
  });

  //
  // console.group('Установка флага: исходящий массив');
  // console.log(cards);
  // console.groupEnd();

  return cards;
}

export const nameFilter = (cards, searchString) => {
  return cards.filter((card) => {
    const isContainInRu = generalization(card.nameRU).includes(generalization(searchString));
    const isContainInEn = generalization(card.nameEN).includes(generalization(searchString));

    return isContainInRu || isContainInEn;
  });
}

export const durationFilter = (cards) => {
  return cards.filter((card) => {
    return card.duration <= SHORT_FILM_LENGTH;
  });
}

const generalization = (str) => {
  return String(str).toLowerCase().trim();
}

export const duration = (duration) => {
  const hours = Math.trunc(duration / 60);
  const minutes = duration % 60;
  return `${ hours > 0 ? `${ hours }ч` : '' } ${ minutes > 0 ? `${ minutes }мин` : '' }`; // hours + 'ч ' + minutes + 'мин';
}
