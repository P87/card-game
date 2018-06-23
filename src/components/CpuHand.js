import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Helper from '../model/helper';

@observer
export default class CpuHand extends Component {

    playCard(card) {
        const game = this.props.game;
        const pile = game.pile;
        const topPileCard = pile.topCard;

        if (
            Helper.trumpCards().indexOf(card.number) === -1 &&
            Helper.cardValues()[card.number] < Helper.cardValues()[topPileCard.number]
        ) {
            alert("You need to play a card of equal value or higher than the top card on the pile");
            return;
        }

        const index = game.playerHand.cards.indexOf(card);
        if (index !== -1) {
            game.playerHand.cards.splice(index, 1);
        }
        game.pile.cards.push(card);
    }

    pickFromDeck(e) {
        e.preventDefault();
        this.props.game.playerHand.cards.push(this.props.deck.takeTopCard());
    }

    render() {
        return <div>
            <strong>{this.props.title}</strong>
            <div>
                {
                    this.props.game.playerHand.cards.map(card => {
                        return <div
                            className="card"
                            key={card.number + card.suit}
                        >?</div>
                    })

                }
            </div>
        </div>
    }
}