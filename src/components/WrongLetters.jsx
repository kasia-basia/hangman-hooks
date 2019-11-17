import React from "react";
import {WrongLetter} from "./Game.styled";

const WrongLetters = ({wrongLetters}) => (
    <WrongLetter>
        {wrongLetters.map((el, i) => <span key={i}>{el}</span>)}
    </WrongLetter>
);

export default WrongLetters;