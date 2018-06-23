import CardDeck from "./deck";
import Hand from "./hand";

export default class Game {

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

    playerHand() {
        return this.playerHand;
    }

    cpuHand() {
        return this.cpuHand;
    }

    pile() {
        return this.pile;
    }

    get deck() {
        return this.cardDeck;
    }
}