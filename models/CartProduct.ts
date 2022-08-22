import {TProduct} from "./Product";

export type TCartProduct = {
    product: TProduct;
    quantity: number;
    getTotalPrice: () => number;
}
export class CartProduct implements TCartProduct{
    product: TProduct;
    quantity: number;
    constructor(product: TProduct, quantity: number){
        this.product = product;
        this.quantity = quantity;
    }
    getTotalPrice(){
        return this.product.price * this.quantity;
    }
}