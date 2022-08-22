import {TProduct} from "./Product";

export type TWishlist = {
    products: TProduct[],
    addProduct: (product: TProduct) => void,
    removeProduct: (product: TProduct) => void,
    findProduct: (product: TProduct) => TProduct | undefined,
}

export class Wishlist implements TWishlist {
    products: TProduct[];

    constructor(wishlist?: TWishlist) {
        this.products = [];
        if (wishlist) {
            this.setProducts(wishlist.products);
        }
    }

    setProducts(products: TProduct[]) {
        this.products = products;
    }

    removeProduct(product: TProduct) {
        this.products = this.products.filter(p => p.id !== product.id);
    }

    addProduct(product: TProduct) {
        if (!this.findProduct(product)) {
            this.products.push(product);
        }
    }

    findProduct(product: TProduct) {
        return this.products.find(p => p.id === product.id);
    }
}