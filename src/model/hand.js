import {observable, computed} from 'mobx';

export default class Hand {
    @observable cards = [];

    @computed get handSize() {
        return this.cards.length;
    }
}