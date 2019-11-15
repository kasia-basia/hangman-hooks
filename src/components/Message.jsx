import React from "react";
import {gameOver, gameWin, congrats, youLost} from "../constants";

const Message = ({gameState}) => {
    let message;
    if (gameState === gameWin){
        message = congrats
    }
    if (gameState === gameOver){
        message = youLost
    }
    return (
        <div>
            <span className={'game-message'}>{message}</span>
        </div>
    );
};

export default Message;