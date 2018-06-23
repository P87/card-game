import CardDeck from '../data/deck';
import React, {Component} from 'react';

export default class Deck extends Component {

    constructor() {
        super();
        this.cardDeck = new CardDeck().fullDeck();
    }

    render() {
        const deck = this.cardDeck.map(card => {
            return <div key={card.suit + card.number}>Suit: {card.suit} Number: {card.number}</div>
        });
        return <div>
            <div>{deck}</div>
        </div>
    }
}