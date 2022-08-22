import {CartProduct, TCartProduct} from "./CartProduct";

export type TCart = {
    cartProducts: CartProduct[],
    addToCart: (product: TCartProduct) => void,
    removeFromCart: (product: TCartProduct) => void,
    updateCart: (product: TCartProduct) => void,
    clearCart: () => void,
    getTotal: () => number
}

export class Cart implements TCart {
    cartProducts: CartProduct[];

    constructor(cart?: TCart) {
        this.cartProducts = [];
        if (cart) {
            this.setCartProducts(cart.cartProducts);
        }
    }

    addToCart(product: CartProduct) {
        const existingProduct = this.cartProducts.find(p => p.product.id === product.product.id);
        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            this.cartProducts.push(product);
        }
    }

    removeFromCart(cartProduct: CartProduct) {
        this.cartProducts = this.cartProducts.filter(p => p.product.id !== cartProduct.product.id);
    }

    removeOneFromCart(cartProduct: CartProduct) {
        this.cartProducts = this.cartProducts.map(p => {
            if (p.product.id === cartProduct.product.id) {
                p.quantity--;
            }
            return p;
        }).filter(p => p.quantity > 0);
    }

    updateCart(cartProduct: CartProduct) {
        this.cartProducts = this.cartProducts.map(p => {
            if (p.product.id === cartProduct.product.id) {
                return cartProduct;
            }
            return p;
        });
    }

    clearCart() {
        this.cartProducts = [];
    }

    getTotal() {
        return this.cartProducts.reduce((total, cartProduct) => total + cartProduct.getTotalPrice(), 0);
    }

    setCartProducts(products: TCartProduct[]) {
        this.cartProducts = products.map(p => new CartProduct(p.product, p.quantity));
    }
}