import randomWords from "./words";

export const getRandomWord = () =>
    randomWords.randomWords[Math.floor(Math.random() * randomWords.randomWords.length)];
