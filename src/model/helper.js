export default class Helper {

    static isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}