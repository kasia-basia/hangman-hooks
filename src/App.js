import React, {useState} from "react";
import "./App.scss";

import GameFn from "./components/GameFn";
import Header from "./components/Header";
import {getRandomWord} from "./utils";

function App() {
    const [currentWord] = useState(() => getRandomWord());

    return (
        <div className="container">
            <Header/>
            <GameFn randomWord={currentWord}/>
        </div>
    )
}

export default App;
