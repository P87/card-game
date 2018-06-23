export default class Helper {

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static trumpCards() {
        return [
            "A", // Not really a trump card but nothing beats it
            "2",
            "8",
            "10"
        ]
    }

    static cardValues() {
        return {
            "A": 14,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "10": 10,
            "J": 11,
            "Q": 12,
            "K": 13
        }
    }
}