import {createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState} from "react";
import {Cart, TCart} from "../models/Cart";
import {constProducts} from "../contants/products";
import {TProduct} from "../models/Product";
import {TWishlist, Wishlist} from "../models/Wishlist";

type Store = {
    cart: TCart,
    setCart: (cart: TCart) => void,
    products: TProduct[],
    wishlist: TWishlist,
    setWishlist: (wishlist: TWishlist) => void,
}
const storeContext = createContext<Store | undefined>(undefined);

export const StoreProvider = ({children}: { children: ReactNode }) => {
    const [cart, setCart] = useState<TCart>(new Cart());
    const [wishlist, setWishlist] = useState<TWishlist>(new Wishlist());
    const products = constProducts;
    useEffect(() => {
        let storageCart = sessionStorage.getItem('cart');
        const storageWishlist = sessionStorage.getItem('wishlist');
        if (storageCart && storageCart !== 'null') {
            setCart(JSON.parse(storageCart));
        }
        if (storageWishlist && storageWishlist !== 'null') {
            setWishlist(JSON.parse(storageWishlist));
        }
    }, []);
    // useEffect(() => {
    // } , [cart]);
    return (
        <storeContext.Provider value={{cart, setCart,wishlist, setWishlist,products}}>
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