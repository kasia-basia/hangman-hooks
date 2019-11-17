import React, {useEffect, useState} from "react";
import Hangman from "../components/Hangman";
import {gameOver, gameWin, wrongAnswersLimit} from "../constants";
import taDa from "../assets/audio/tada.mp3";
import sad from "../assets/audio/sad.mp3";
import tap from "../assets/audio/tap.wav";
import error from "../assets/audio/error.mp3";
import WrongLetters from "./WrongLetters";
import Letters from "./Letters";
import Message from "./Message";

const Game = ({randomWord, setGameState, gameState, sound}) => {
    console.log(randomWord);
    const separatedWord = randomWord.split("");
    const [answerIndexes, setAnswerIndexes] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const winSound = new Audio(taDa);
    const loseSound = new Audio(sad);
    const tapSound = new Audio(tap);
    const errorSound = new Audio(error);

    const rightLetter = l => {
        const indexes = [];
        let idx = randomWord.indexOf(l);
        while (idx !== -1) {
            indexes.push(idx);
            idx = randomWord.indexOf(l, idx + 1);
        } // finding indexes of correctly guessed letters
        setAnswerIndexes(prev => Array.from(new Set([...prev, ...indexes])))
    };

    const handler = e => {
        const char = e.key.toLowerCase();
        const isLetter = e.keyCode > 64 && e.keyCode < 91;
        if (isLetter) {
            if (wrongLetters.includes(char)){
                sound && errorSound.play()
            }
            else if (separatedWord.includes(char)) {
                sound && tapSound.play();
                rightLetter(char)
            }
            else {
                sound && tapSound.play();
                setWrongLetters(prev => Array.from(new Set([...prev, char])))
            }
        }
    };

    useEffect(() => {
        if (randomWord.length === answerIndexes.length){
            setGameState(gameWin);
            sound && winSound.play();
            return null
        }
        if (wrongLetters.length === wrongAnswersLimit){
            setGameState(gameOver);
            sound && loseSound.play();
            return null
        }
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [answerIndexes, wrongLetters]);

    return (
        <div className={"game__wrapper"}>
            <Hangman wrongAnswers={wrongLetters.length}/>
            <div className={"game"}>
                <Letters separatedWord={separatedWord} answerIndexes={answerIndexes} gameState={gameState}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Message gameState={gameState}/>
            </div>
            </div>
    )
};

export default Game;