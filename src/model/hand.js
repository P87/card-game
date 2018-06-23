import {observable, computed} from 'mobx';

export default class Hand {
    @observable cards = [];

    /*
     * This is pointless but I just wanted to use computed somewhere.
     */
    @computed get handSize() {
        return this.cards.length;
    }

    get topCard() {
        return this.cards[this.handSize - 1];
    }
}