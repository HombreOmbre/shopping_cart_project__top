export class Product {
    #id;
    #productName;
    #productPrice;
    #productAmount;
    #productImg;
    #productBasicPrice;

    constructor(id, productName, productPrice, productImg) {
        this.#id = id;
        this.#productName = productName;
        this.#productPrice = productPrice;
        this.#productAmount = 1;
        this.#productImg = productImg;
        this.#productBasicPrice = productPrice;
    }

    getId() {
        return this.#id;
    }

    getProductName() {
        return this.#productName;
    }

    getProductBasicPrice() {
        return this.#productBasicPrice;
    }

    getProductPrice() {
        return this.#productPrice;
    }

    getProductImg() {
        return this.#productImg;
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