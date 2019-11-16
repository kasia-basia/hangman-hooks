import React from "react";
import {gameOver, gameWin, congrats, youLost} from "../constants";

const Message = ({gameState}) => {
    let message;
    if (gameState === gameWin) {
        message = congrats
    }
    if (gameState === gameOver) {
        message = youLost
    }
    return (
        <div className="game__message">
            <span className="game__message-text">dlasdasdas</span>
        </div>
    );
};

export default Message;