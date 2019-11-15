import React from 'react';
import Hangman from '../components/Hangman';

import Sound from "react-sound";
import taDa from "../assets/audio/tada.mp3";
import sad from "../assets/audio/sad.mp3";
import 'react-simple-keyboard/build/css/index.css';
import WrongLetters from "./WrongLetters";
import Letters from "./Letters";


export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomWord: this.props.randomWord,
            separatedWord: this.props.randomWord.split(''),
            key: '',
            wrongAnswers: 0,
            wrongLetters: [],
            answerIndexes: [],
            gameOver: false,
            gameWin: false
        };
    }

    handleLetter = (e) => {
        let key = '';
        e.key ? key = e.key : key = e;  // determine whether osk or physical keyboard was used
        const isLetter = (key >= "a" && key <= "z"); // checking if pressed key is a letter
        if (isLetter) {
            if (this.state.separatedWord.includes(key)) {
                this.rightLetter(key)
            } else {
                this.wrongLetter(key)
            }
        }
    };

    rightLetter = (e) => {
        const indexes = [];
        var idx = this.state.randomWord.indexOf(e);
        while (idx !== -1) {
            indexes.push(idx);
            idx = this.state.randomWord.indexOf(e, idx + 1);
        } // finding indexes of correctly guessed letters
        this.setState(prevState => {
            return {
                answerIndexes: [...this.state.answerIndexes, ...indexes].filter((el, pos) => {
                    return [...this.state.answerIndexes, ...indexes].indexOf(el) === pos
                }) // filtering array to avoid duplicates
            }
        })
    };

    wrongLetter = (e) => {
        if (!this.state.wrongLetters.includes(e)) {
            this.setState(prevState => {
                return {
                    wrongAnswers: prevState.wrongAnswers + 1, // counter++
                    wrongLetters: [...this.state.wrongLetters, e] // saving wrong letter
                }
            });
        }
    };

    gameOver = () => {
        window.removeEventListener('keydown', this.handleLetter);
        document.body.classList.add('game-over-bg');
        this.setState({
            gameOver: true,
            wrongLetters: [] //clear wrong letters list underneath
        })

    };

    gameWin() {
        window.removeEventListener('keydown', this.handleLetter);
        document.body.classList.add('game-win-bg');
        this.setState({
            gameWin: true,
            wrongLetters: [],
        })
    }

    render() {
        const {gameOver, gameWin, wrongAnswers, wrongLetters, separatedWord, answerIndexes} = this.state;
        return (
            <div className={'content__wrapper'}>
                <div className={'game-wrapper'}>
                    <Hangman wrongAnswers={wrongAnswers}/>
                    <div className={'game'}>
                        <Letters separatedWord={separatedWord} answerIndexes={answerIndexes}/>
                        <WrongLetters
                            wrongLetters={wrongLetters}
                            gameOver={gameOver}
                            gameWin={gameWin}
                        />
                    </div>
                    <Sound url={taDa} playStatus={gameWin ? Sound.status.PLAYING : Sound.status.PAUSED}/>
                    <Sound url={sad} playStatus={gameOver ? Sound.status.PLAYING : Sound.status.PAUSED}/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleLetter);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.wrongAnswers !== prevState.wrongAnswers) {
            if (this.state.wrongAnswers === 11) {
                this.gameOver();
            }
        }  // conditions need to be wrapped in if statements to avoid infinite looping

        if (this.state.answerIndexes !== prevState.answerIndexes) {
            if (this.state.randomWord.length === this.state.answerIndexes.length) {
                this.gameWin();
            }
        } // conditions need to be wrapped in if statements to avoid infinite looping

        if (this.props.randomWord !== prevProps.randomWord) {  // if props change, clear everything and start again
            this.setState({
                randomWord: this.props.randomWord,
                separatedWord: this.props.randomWord.split(''),
                answerIndexes: [],
                wrongLetters: [],
                wrongAnswers: 0,
                gameOver: false,
                gameWin: false
            });

            window.addEventListener('keydown', this.handleLetter);
            document.body.classList.remove('game-win-bg');
            document.body.classList.remove('game-over-bg');
        }


    }
}