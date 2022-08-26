import {Cart, TCart} from "./Cart";

export type TPurchase = {
    carts: TCart[];
    getTotal: () => number;
}

export class Purchase implements TPurchase {
    carts: TCart[];

    constructor(purchase?: TPurchase) {
        if (purchase) {
            this.carts = purchase.carts.map(cart => new Cart(cart));

        } else {
            this.carts = [];
        }
    }

    getTotal(): number {
        return this.carts.reduce((acc, cart) => acc + cart.getTotal(), 0);
    }
}