import Card from './Card';
import {observable, computed} from 'mobx';

export default class Deck {
    cardNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    cardSuits = ["♠", "♥", "♦", "♣"];
    @observable cards = [];

    constructor() {
        this.createDeck()
    }

    createDeck() {
        this.cardSuits.forEach(suit => {
            this.cardNumbers.forEach(number => {
                this.cards.push(new Card(suit, number));
            });
        });
    };

    shuffle(shuffleCount) {
        for(let i = 0; i < shuffleCount; i++) {
            const rndNo = this.getRandomInt(0, 51);
            const card = this.cards[i];
            this.cards[i] = this.cards[rndNo];
            this.cards[rndNo] = card;
        }
    }

    takeTopCard() {
        return this.cards.pop();
    }

    @computed get deckSize() {
        return this.cards.length;
    }

    fullDeck() {
        return this.cards;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}