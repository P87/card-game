import CardDeck from "./model/deck";
import Deck from './components/Deck';
import Hand from './model/hand';
import Pile from './components/Pile';
import PlayerHand from './components/PlayerHand';
import React, {Component} from 'react';

export default class App extends Component {

    constructor() {
        super();

        // Set up the game
        this.cardDeck = new CardDeck();
        this.cardDeck.shuffle(52);
        this.playerHand = new Hand();
        this.cpuHand = new Hand();
        this.pile = new Hand();
        this.dealToHand(this.playerHand);
        this.dealToHand(this.cpuHand);
        this.pile.cards.push(this.cardDeck.takeTopCard());
    }

    dealToHand(hand) {
        for (let i = 0; i < 7; i++) {
            hand.cards.push(this.cardDeck.takeTopCard());
        }
    }

    render () {
        // @todo: Change second playerHand to cpuHand
        return <div>
            <Deck deck={this.cardDeck} />
            <Pile hand={this.pile} />
            <PlayerHand hand={this.playerHand} title="Your Hand" pile={this.pile} deck={this.cardDeck} />
            <PlayerHand hand={this.cpuHand} title="CPU Hand" pile={this.pile} deck={this.cardDeck} />
        </div>
    }
}