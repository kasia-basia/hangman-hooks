import React from "react";
import {gameOver} from "../constants";
import {GuesseWord, Letter, Cover} from "./Game.styled";

export const Letters = ({separatedWord, answerIndexes, gameState}) => (
    <GuesseWord>
        {separatedWord.map((el, i) => (
            <Letter key={i}>
                {
                    gameState !== gameOver && !answerIndexes.includes(i)
                    ? <Cover/>
                    : null
                }
                <span>{el}</span>
            </Letter>
        ))
        }
    </GuesseWord>
);

export default Letters;