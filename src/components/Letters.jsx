import React from "react";
import {gameOver} from "../constants";


export const Letters = ({separatedWord, answerIndexes, gameState}) => (
    <div className="guessed-word">
        {separatedWord.map((el, i) => (
            <div key={i} className="letter">
                {
                    gameState !== gameOver && !answerIndexes.includes(i)
                    ? <div className="hide"/>
                    : null
                }
                <span>{el}</span>
            </div>
        ))
        }
    </div>
);

export default Letters;