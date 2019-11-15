import React from 'react';
import refresh from '../assets/images/refresh.png'

export default class Header extends React.Component {
    newGame = () => {
        window.location.reload();
    };

    render() {
        return (
            <div className={'header'}>
                <div className={'header__content'}>
                    <h1 className={'header__title'}>Wisielec</h1>
                    <button className={'header__refresh-wrapper'} onClick={this.newGame}>
                        <span>nowe słowo</span>
                        <img alt='refresh icon' src={refresh}/>
                    </button>
                </div>
            </div>

        )
    }

}