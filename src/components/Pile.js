import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Pile extends Component {

    render() {
        const cards = this.props.hand.cards;
        const topCard = cards[cards.length-1];
        return <div>
            <div><strong>Pile</strong></div>
            <div className="card">{topCard.number} {topCard.suit}</div>
            <div>{this.props.hand.handSize}</div>
        </div>
    }

}