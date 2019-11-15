import React, {useEffect, useState} from "react";
import Hangman from "../components/Hangman";
import {gameOver, gameWin, wrongAnswersLimit} from "../constants";
import Sound from "react-sound";
import taDa from "../assets/audio/tada.mp3";
import sad from "../assets/audio/sad.mp3";
import WrongLetters from "./WrongLetters";
import Letters from "./Letters";
import Message from "./Message";

const Game = ({randomWord}) => {
    const separatedWord = randomWord.split("");
    const [answerIndexes, setAnswerIndexes] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);
    const [gameState, setGameState] = useState("playing");
    const wrongAnswers = wrongLetters.length;

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
        console.log(randomWord);
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
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    useEffect(() => {
        if (wrongAnswers === wrongAnswersLimit) {
            setWrongLetters([]);
            setGameState(gameOver);
            document.body.classList.add("game-over-bg");
            window.removeEventListener("keydown", handler);
        }
    }, [wrongAnswers]);

    useEffect(() => {
        if (randomWord.length === answerIndexes.length) {
            setGameState(gameWin);
            document.body.classList.add("game-win-bg");
            setWrongLetters([]);
        }
    }, [answerIndexes]);


    return (
        <div className={"content__wrapper"}>
            <div className={"game-wrapper"}>
                <Hangman wrongAnswers={wrongAnswers}/>
                <div className={"game"}>
                    <Letters separatedWord={separatedWord} answerIndexes={answerIndexes} gameState={gameState}/>
                    <WrongLetters wrongLetters={wrongLetters}/>
                    <Message gameState={gameState}/>
                </div>
                <Sound url={taDa} playStatus={gameState === gameWin ? Sound.status.PLAYING : Sound.status.PAUSED}/>
                <Sound url={sad} playStatus={gameState === gameOver ? Sound.status.PLAYING : Sound.status.PAUSED}/>
            </div>
        </div>
    )
};

export default Game;