import styles from "../styles/ActionIcons.module.scss";
import {BsCart3, BsHeart, BsPerson} from "react-icons/bs";
import {useStore} from "../contexts/Store";
import {TProduct} from "../models/Product";
import {Wishlist} from "../models/Wishlist";
import {TbHourglassEmpty} from "react-icons/tb";
import {TCartProduct} from "../models/CartProduct";
import {Cart} from "../models/Cart";
import {AiOutlineShopping} from "react-icons/ai";
type TActionIcons = {
    parentDivClass:string
}
const ActionIcons = ({parentDivClass}:TActionIcons) => {
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
    const {cart, setCart} = useStore();
    const removeFromCart = (product: TCartProduct, allProduct = false) => {
        const auxCart = new Cart(cart);
        if (allProduct) {
            auxCart.removeFromCart(product);
        } else {
            auxCart.removeOneFromCart(product);
        }
        setCart(auxCart);
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
                            <button><AiOutlineShopping className={styles.finishShoppingIcon}/>Checkout</button>
                        </div>
                    </> :
                    <div className={styles.emptyCart}>
                        <TbHourglassEmpty className={styles.emptyCartIcon}/>
                        <p>Empty Cart</p>
                    </div>
                }
            </div>
        </div>
    );
};
const WishlistDropdown = () => {
    const {wishlist, setWishlist} = useStore();
    const removeFromWishlist = (product: TProduct) => {
        wishlist.removeProduct(product);
        setWishlist(new Wishlist(wishlist));
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
                        <TbHourglassEmpty className={styles.emptyCartIcon}/>
                        <p>Empty Wishlist</p>
                    </div>
                }
            </div>
        </div>
    );
};
export default ActionIcons;