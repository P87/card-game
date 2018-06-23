import React, {Component} from 'react';
import {observer} from 'mobx-react';
import Helper from '../model/helper';

@observer
export default class CpuHand extends Component {

    render() {
        return <div>
            <strong>CPU Hand</strong>
            <div>
                {
                    this.props.game.cpuHand.cards.map(card => {
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