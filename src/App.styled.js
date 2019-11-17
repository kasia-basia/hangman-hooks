import styled from "styled-components"
import {colors, gameOver, gameWin, gamePlaying} from "./constants";


const handleBgColor = gameState => {
    switch (gameState) {
    case gamePlaying:
        return colors.main;
    case gameWin:
        return colors.win;
    case gameOver:
        return colors.lose;
    default:
        return colors.main;
    }
};

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Caveat Brush', sans-serif;
  background-color: ${({gameState}) => handleBgColor(gameState)}
`;