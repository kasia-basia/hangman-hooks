import React from "react";

const WrongLetters = ({wrongLetters}) => (
    <div className={"wrong-letters"}>
        {wrongLetters.map((el, i) => <span key={i}>{el}</span>)}
    </div>
);

export default WrongLetters;