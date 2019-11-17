import React from "react";
import refresh from "../assets/images/refresh.png"

export const Header = ({sound, setSound, setCurrentWord}) => {
    const newGame = () => {
        window.location.reload();
    };

    const toggleSound = () => {
        setSound(!sound)
    };

    return (
        <div className={"header"}>
            <h1 className={"header__title"}>Wisielec</h1>
            <button className={"header__refresh"} onClick={newGame}>
                <span>nowe słowo</span>
                <img alt='refresh icon' src={refresh}/>
            </button>
            <button className={"header__sound"} onClick={toggleSound}>
                <span>dźwięk {sound ? "włączony" : "wyłączony"}</span>
            </button>
        </div>
    )
};

export default Header;