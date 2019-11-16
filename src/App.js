import React, {useState} from "react";
import "./App.scss";
import Game from "./components/Game";
import Header from "./components/Header";
import randomWords from "./words";

export const pickRandomWord = () =>
    randomWords.randomWords[Math.floor(Math.random() * randomWords.randomWords.length)];

function App() {
    const [currentWord] = useState(() => pickRandomWord());

    return (
        <div className="container">
            <Header/>
            <Game randomWord={currentWord}/>
        </div>
    )
}

export default App;
