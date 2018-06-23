import CardDeck from "./deck";
import Hand from "./hand";
import {observable} from 'mobx';

export default class Game {

    @observable playerHand = null;
    @observable cardDeck = null;
    @observable cpuHand = null;
    @observable pile = null;

    constructor() {
        this.cardDeck = new CardDeck();
        this.cardDeck.shuffle(52);
        this.playerHand = new Hand();
        this.cpuHand = new Hand();
        this.pile = new Hand();
        this.dealToHand(this.playerHand);
        this.dealToHand(this.cpuHand);
        this.pile.cards.push(this.cardDeck.takeTopCard());
    }

    dealToHand(hand) {
        for (let i = 0; i < 7; i++) {
            hand.cards.push(this.cardDeck.takeTopCard());
        }
    }

    pickUpPile() {
        this.pile.cards.forEach(card => {
            this.playerHand.cards.push(card);
        });

        this.pile.cards = [];
    }

    playCard(card) {
        const index = this.playerHand.cards.indexOf(card);
        if (index !== -1) {
            this.playerHand.cards.splice(index, 1);
        }
    }

    deletePile() {
        this.pile = null;
        this.pile = new Hand();
    }

    get deck() {
        return this.cardDeck;
    }
}