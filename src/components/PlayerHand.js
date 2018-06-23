import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class PlayerHand extends Component {

    playCard(card) {
        const index = this.props.hand.cards.indexOf(card);
        if (index !== -1) {
            this.props.hand.cards.splice(index, 1);
        }
        this.props.pile.cards.push(card);
    }

    pickFromDeck(e) {
        e.preventDefault();
        this.props.hand.cards.push(this.props.deck.takeTopCard());
    }

    render() {
        return <div>
            <strong>{this.props.title}</strong>
            <div>
                {
                    this.props.hand.cards.map(card => {
                        return <div
                            className={"card " + card.suit}
                            key={card.number + card.suit}
                            onClick={this.playCard.bind(this, card)}
                        >{card.number} {card.suit}</div>
                    })

                }
            </div>
            <a href="#" onClick={this.pickFromDeck.bind(this)}>Pick Card From Deck</a>
        </div>
    }
}