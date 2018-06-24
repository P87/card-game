import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Helper from '../model/helper';

@observer
export default class PlayerHand extends Component {

    playCard(card) {
        this.props.game.playCard(card);
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