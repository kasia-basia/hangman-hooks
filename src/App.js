import React, {useState} from "react";
import "./App.scss";

import Game from "./components/Game";
import Header from "./components/Header";
import {pickRandomWord} from "./utils";

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
