import React, {useState} from "react";
import "./App.scss";
import Game from "./components/Game";
import Header from "./components/Header";
import randomWords from "./words";
import {gamePlaying} from "./constants";

export const pickRandomWord = () =>
    randomWords.randomWords[Math.floor(Math.random() * randomWords.randomWords.length)];

function App() {
    const [currentWord, setCurrentWord] = useState(() => pickRandomWord());
    const [gameState, setGameState] = useState(gamePlaying);
    const [sound, setSound] = useState(true);

    return (
        <div className="container">
            <Header
                sound={sound}
                setSound={setSound}
            />
            <Game
                sound={sound}
                setGameState={setGameState}
                gameState={gameState}
                randomWord={currentWord}
            />
        </div>
    )
}

export default App;
