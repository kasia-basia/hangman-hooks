import randomWords from "./words";

export const pickRandomWord = () =>
    randomWords.randomWords[Math.floor(Math.random() * randomWords.randomWords.length)];
