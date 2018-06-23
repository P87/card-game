import CardDeck from '../model/deck';
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class Deck extends Component {

    render() {
        return <div>
            <div><strong>Deck</strong></div>
            <div className="deck">{this.props.deck.deckSize}</div>
        </div>
    }

}