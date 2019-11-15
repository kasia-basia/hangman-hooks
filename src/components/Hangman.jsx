import React from 'react';


export const Hangman = ({wrongAnswers}) => (
    <div className={"hangman"}>
        <div className={"hangman__img-wrapper"} style={{
            backgroundPosition: `calc(${wrongAnswers}*(-250px)) 0`
        }}/>
    </div>
);

export default Hangman