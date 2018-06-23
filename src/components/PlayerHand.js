import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Helper from '../model/helper';

@observer
export default class PlayerHand extends Component {

    playCard(card) {
        const pile = this.props.pile;
        const topPileCard = pile.topCard();
        let canPlayCard = true;

        // @todo Do this properly
        // if both cards are numeric just do a straight comparison
        if (Helper.isNumeric(topPileCard.number) && Helper.isNumeric(card.number)) {
            if (card.number < topPileCard.number) {
                canPlayCard = false;
            }
        } else {
            const cardValues = {
                "A": 14,
                "K": 13,
                "Q": 12,
                "J": 11
            };
            if (cardValues[card.number] < cardValues[topPileCard.number]) {
                canPlayCard = false;
            }
        }

        if (!canPlayCard) {
            alert("You need to play a card of equal value or higher than the top card on the pile");
            return;
        }

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