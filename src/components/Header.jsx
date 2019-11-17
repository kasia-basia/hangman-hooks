import React from "react";
import refresh from "../assets/images/refresh.png"
import {HeaderContainer, Refresh, ToggleSound, Title} from "./Header.styled";

export const Header = ({sound, setSound, setCurrentWord}) => {
    const newGame = () => {
        window.location.reload();
    };

    const toggleSound = () => {
        setSound(!sound)
    };

    return (
        <HeaderContainer>
            <Title>Wisielec</Title>
            <Refresh onClick={newGame}>
                <span>nowe słowo</span>
                <img alt='refresh icon' src={refresh}/>
            </Refresh>
            <ToggleSound onClick={toggleSound}>
                <span>dźwięk {sound ? "włączony" : "wyłączony"}</span>
            </ToggleSound>
        </HeaderContainer>
    )
};

export default Header;