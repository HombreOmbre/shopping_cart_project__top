export class Product {
    #id;
    #productName;
    #productPrice;
    #productAmount;

    constructor(id, productName, productPrice) {
        this.#id = id;
        this.#productName = productName;
        this.#productPrice = productPrice;
        this.#productAmount = 1;
    }

    getId() {
        return this.#id;
    }

    getProductName() {
        return this.#productName;
    }

    getProductPrice() {
        return this.#productPrice;
    }

    getProductAmount() {
        return this.#productAmount;
    }

    increaseProductPrice(price) {
        this.#productPrice += price;
    }

    decreaseProductPrice(price) {
        this.#productPrice -= price;
    }

    increaseProductAmount() {
        this.#productAmount += 1;
    }

    decreaseProductAmount() {
        this.#productAmount -= 1;
    }
}