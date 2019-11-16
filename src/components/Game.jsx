import React, {useEffect, useState} from "react";
import Hangman from "../components/Hangman";
import {gameOver, gameWin, gamePlaying, wrongAnswersLimit} from "../constants";
import Sound from "react-sound";
import taDa from "../assets/audio/tada.mp3";
import sad from "../assets/audio/sad.mp3";
import WrongLetters from "./WrongLetters";
import Letters from "./Letters";
import Message from "./Message";

const Game = ({randomWord}) => {
    console.log(randomWord);
    const separatedWord = randomWord.split("");
    const [answerIndexes, setAnswerIndexes] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [gameState, setGameState] = useState(gamePlaying);

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
        const isLetter = e.keyCode > 64 && e.keyCode < 91;
        if (isLetter) {
            if (separatedWord.includes(e.key)) {
                rightLetter(e.key)
            } else {
                setWrongLetters(prev => Array.from(new Set([...prev, e.key])))
            }
        }
    };

    useEffect(() => {
        if (randomWord.length === answerIndexes.length){
            setGameState(gameWin);
            return null
        }
        if (wrongLetters.length === wrongAnswersLimit){
            setGameState(gameOver);
            return null
        }
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [answerIndexes, wrongLetters]);

    useEffect( () => {
        if (gameState === gameWin) {
            document.body.classList.add("game-win-bg");
        }
        if (gameState === gameOver) {
            document.body.classList.add("game-over-bg");
        }
    }, [gameState]);

    return (
        <div className={"game__wrapper"}>
            <Hangman wrongAnswers={wrongLetters.length}/>
            <div className={"game"}>
                <Letters separatedWord={separatedWord} answerIndexes={answerIndexes} gameState={gameState}/>
                <WrongLetters wrongLetters={wrongLetters}/>
                <Message gameState={gameState}/>
            </div>
            <Sound url={taDa} playStatus={gameState === gameWin ? Sound.status.PLAYING : Sound.status.PAUSED}/>
            <Sound url={sad} playStatus={gameState === gameOver ? Sound.status.PLAYING : Sound.status.PAUSED}/>
        </div>
    )
};

export default Game;