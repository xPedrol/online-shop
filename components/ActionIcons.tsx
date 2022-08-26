import styles from "../styles/ActionIcons.module.scss";
import {BsCart3, BsHeart, BsPerson} from "react-icons/bs";
import {useStore} from "../contexts/StoreContext";
import {TProduct} from "../models/Product";
import {TCartProduct} from "../models/CartProduct";
import {AiOutlineShopping} from "react-icons/ai";
import Link from "next/link";
import {HiOutlineFilter} from "react-icons/hi";

type TActionIcons = {
    parentDivClass: string
}
const ActionIcons = ({parentDivClass}: TActionIcons) => {
    return (
        <>
            <div className={`${styles.parent} ${parentDivClass}`}>
                <div className={styles.cart}>
                    <BsCart3 className={styles.endSideIcon}/>
                    <CartDropdown/>
                </div>
                <div className={styles.cart}>
                    <BsHeart className={styles.endSideIcon}/>
                    <WishlistDropdown/>
                </div>
                <BsPerson className={styles.endSideIcon}/>
            </div>
        </>
    );
};
const CartDropdown = () => {
    const {cart, removeFromCart: sRemoveFromCart} = useStore();
    const removeFromCart = (product: TCartProduct, allProduct = false) => {
        if (allProduct) {
            sRemoveFromCart(product);
        } else {
            sRemoveFromCart(product, true);
        }
    };
    return (
        <div className={styles.cartDropdown}>
            <div className={styles.cartContent}>
                {cart && cart.cartProducts.length > 0 ?
                    <>
                        {
                            cart.cartProducts.map((cartProduct) =>
                                <div key={cartProduct.product.id} className={styles.cartItem}>
                                    <img src={cartProduct.product.image} alt={cartProduct.product.name}/>
                                    <div className={styles.cartItemContent}>
                                        <h5>{cartProduct.product.name}</h5>
                                        <p>{cartProduct.quantity}x -
                                            R${cartProduct.product.price.toFixed(2)}
                                            / R${(cartProduct.product.price * cartProduct.quantity).toFixed(2)}</p>
                                        <button onClick={() => removeFromCart(cartProduct)}>Remove one</button>
                                        <button onClick={() => removeFromCart(cartProduct, true)}>Clean</button>
                                    </div>

                                </div>
                            )
                        }
                        <div className={styles.cartTotal}>
                            <h5>Total</h5>
                            <p>R${cart.getTotal().toFixed(2)}</p>
                        </div>
                        <div className={styles.finishShopping}>
                            <Link href={'/checkout'} passHref={true}>
                                <button><AiOutlineShopping className={styles.finishShoppingIcon}/>Checkout</button>
                            </Link>
                        </div>
                    </> :
                    <div className={styles.emptyCart}>
                        <HiOutlineFilter className={styles.emptyCartIcon}/>
                        <p>Empty Cart</p>
                    </div>
                }
            </div>
        </div>
    );
};
const WishlistDropdown = () => {
    const {wishlist, removeFromWishlist: sRemoveFromWishlist} = useStore();
    const removeFromWishlist = (product: TProduct) => {
        sRemoveFromWishlist(product);
    };
    return (
        <div className={styles.cartDropdown}>
            <div className={styles.cartContent}>
                {wishlist && wishlist.products.length > 0 ?
                    <>
                        {
                            wishlist.products.map((product) =>
                                <div key={product.id} className={styles.cartItem}>
                                    <img src={product.image} alt={product.name}/>
                                    <div className={styles.cartItemContent}>
                                        <h5>{product.name}</h5>
                                        <p>R${product.price.toFixed(2)}</p>
                                        <button onClick={() => removeFromWishlist(product)}>Remove</button>
                                    </div>

                                </div>
                            )
                        }
                    </> :
                    <div className={styles.emptyCart}>
                        <HiOutlineFilter className={styles.emptyCartIcon}/>
                        <p>Empty Wishlist</p>
                    </div>
                }
            </div>
        </div>
    );
};
export default ActionIcons;