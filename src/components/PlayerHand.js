import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Helper from '../model/helper';

@observer
export default class PlayerHand extends Component {

    playCard(card) {
        const game = this.props.game;
        const pile = game.pile;
        const topPileCard = pile.topCard;

        if (
            topPileCard &&
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

    pickUpPile(e) {
        e.preventDefault();
        this.props.game.pickUpPile();
    }

    render() {
        return <div>
            <strong>Your Hand</strong>
            <div>
                {
                    this.props.game.playerHand.cards.map(card => {
                        return <div
                            className={"card " + card.suit}
                            key={card.number + card.suit}
                            onClick={this.playCard.bind(this, card)}
                        >{card.number} {card.suit}</div>
                    })

                }
            </div>
            <a href="#" onClick={this.pickUpPile.bind(this)}>Pick up pile</a>
        </div>
    }
}