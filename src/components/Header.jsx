import React from "react";
import refresh from "../assets/images/refresh.png"

export const Header = () => {
    const newGame = () => {
        window.location.reload();
    };

    return (
        <div className={"header"}>
            <h1 className={"header__title"}>Wisielec</h1>
            <button className={"header__refresh-wrapper"} onClick={newGame}>
                <span>nowe słowo</span>
                <img alt='refresh icon' src={refresh}/>
            </button>
        </div>
    )
};

export default Header;