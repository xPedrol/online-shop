import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Cart, TCart} from "../models/Cart";
import {constProducts} from "../contants/products";
import {TProduct} from "../models/Product";
import {TWishlist, Wishlist} from "../models/Wishlist";
import {CartProduct, TCartProduct} from "../models/CartProduct";
import {addFrSession} from "../services/sessionStorageService";

type Store = {
    cart: TCart,
    products: TProduct[],
    wishlist: TWishlist,
    addToCart: (product: TProduct, quantity: number) => void,
    addToWishlist: (product: TProduct) => void,
    removeFromCart: (product: TCartProduct, justOne?: boolean) => void,
    removeFromWishlist: (product: TProduct) => void,
}
const storeContext = createContext<Store | undefined>(undefined);

export const StoreProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<TCart>(new Cart());
    const [wishlist, setWishlist] = useState<TWishlist>(new Wishlist());
    const products = constProducts;
    const addToCart = (product: TProduct, quantity: number) => {
        const cartProduct = new CartProduct(product, quantity);
        cart.addToCart(cartProduct);
        setCart(new Cart(cart));
        addFrSession('cart', cart);
    };
    const removeFromCart = (product: TCartProduct, justOne = false) => {
        if (justOne) {
            cart.removeOneFromCart(product);
        } else {
            cart.removeFromCart(product);
        }
        setCart(new Cart(cart));
        addFrSession('cart', cart);
    };
    const addToWishlist = (product: TProduct) => {
        wishlist.addProduct(product);
        setWishlist(new Wishlist(wishlist));
        addFrSession('wishlist', wishlist);
    };
    const removeFromWishlist = (product: TProduct) => {
        wishlist.removeProduct(product);
        setWishlist(new Wishlist(wishlist));
        addFrSession('wishlist', wishlist);
    };
    useEffect(() => {
        let storageCart = sessionStorage.getItem('cart');
        const storageWishlist = sessionStorage.getItem('wishlist');
        if (storageCart && storageCart !== 'null') {
            setCart(new Cart(JSON.parse(storageCart)));
        }
        if (storageWishlist && storageWishlist !== 'null') {
            setWishlist(new Wishlist(JSON.parse(storageWishlist)));
        }
    }, []);
    // useEffect(() => {
    // } , [cart]);
    return (
        <storeContext.Provider value={{
            cart,
            addToCart,
            addToWishlist,
            removeFromWishlist,
            removeFromCart,
            wishlist,
            products
        }}>
            {children}
        </storeContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(storeContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};