import React from 'react';
import {HangmanContainer, HangmanImg} from "./Game.styled";

export const Hangman = ({wrongAnswers}) => (
    <HangmanContainer>
        <HangmanImg position={wrongAnswers}/>
    </HangmanContainer>
);

export default Hangman;