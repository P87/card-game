import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Pile extends Component {

    render() {
        const game = this.props.game;
        const cards = game.pile.cards;
        const topCard = cards.length > 0 ? cards[cards.length-1] : null;
        const cardClass = topCard ? topCard.suit : null;

        return <div>
            <div><strong>Pile</strong></div>
            <div className={"card " + cardClass}>
                {topCard ? topCard.number + " " + topCard.suit : "-" }
            </div>
            <div>{game.pile.handSize}</div>
        </div>
    }

}