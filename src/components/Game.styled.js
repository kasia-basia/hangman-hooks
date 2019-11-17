import styled from "styled-components";
import hangman from "../assets/images/sprite.png";
import {colors} from "../constants";

export const GameWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameContainer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const GuesseWord = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Letter = styled.div`
  border-bottom: 3px solid black;
  width: 30px;
  padding-bottom: 5px;
  height: 60px;
  text-align: center;
  margin: 10px;
  position: relative;
  
  span {
    font-size: 55px;
    user-select: none;
  }
`;

export const Cover = styled.div`
  background-color: ${colors.main};
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const WrongLetter = styled.div`
  font-size: 35px;
  min-height: 50px;

  span {
    margin: 5px;
  }
`;

export const HangmanContainer = styled.div`
  width: 250px;
  margin: 30px;
`;

export const HangmanImg = styled.div`
  width: 250px;
  height: 250px;
  overflow: hidden;
  background-image: url(${hangman});
  background-position-x: ${({position}) => `calc(${position}*(-250px))`};
`;
