import CpuHand from './components/CpuHand';
import Deck from './components/Deck';
import Game from './model/Game';
import Pile from './components/Pile';
import PlayerHand from './components/PlayerHand';
import React, {Component} from 'react';

export default class App extends Component {

    constructor() {
        super();
        this.game = new Game();
    }

    render () {
        return <div>
            <Deck game={this.game} />
            <Pile game={this.game} />
            <PlayerHand game={this.game} title="Your Hand" />
            <CpuHand game={this.game} title="CPU Hand" />
        </div>
    }
}