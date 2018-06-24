import CardDeck from "./deck";
import Hand from "./hand";
import {observable} from 'mobx';
import Helper from "./helper";

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

    pickUpFromDeck() {
        if (this.cardDeck.deckSize > 0) {
            console.log(this.playerHand.cards);
            console.log(this.cardDeck.cards[this.cardDeck.deckSize - 1]);
            this.playerHand.cards.push(this.cardDeck.cards.pop());
        }
    }

    playCard(card) {
        const topPileCard = this.pile.topCard;
        const playerHand = this.playerHand;

        if (Helper.trumpCards().indexOf(card.number) !== -1) {
            // If it's a 10, delete the pile and it's the player's turn again
            if (card.number === "10") {
                this.removeCardFromHand(playerHand, card);
                this.deletePile();
                return;
            }
        }

        if (
            topPileCard &&
            Helper.trumpCards().indexOf(card.number) === -1 &&
            Helper.cardValues()[card.number] < Helper.cardValues()[topPileCard.number]
        ) {
            alert("You need to play a card of equal value or higher than the top card on the pile, or a trump card");
            return;
        }

        this.pile.cards.push(card);
        this.removeCardFromHand(playerHand, card);
    }

    removeCardFromHand(hand, card) {
        const index = hand.cards.indexOf(card);
        if (index !== -1) {
            hand.cards.splice(index, 1);
        }

        // Pick up a card if they player has less than 3 cards (and there is a card to pick up)
        if (this.playerHand.handSize < 3 && this.cardDeck.deckSize > 0) {
            console.log("Picking up from the deck");
            this.pickUpFromDeck();
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