import {TCart} from "../models/Cart";
import styles from "../styles/CartTable.module.scss";
import {HiOutlineFilter} from "react-icons/hi";
import Image from "next/image";

type TCartTable = {
    cart: TCart;
}
const CartTable = ({cart}: TCartTable) => {
    return (
        <>
            <div className={styles.responsiveTable}>
                <table className={styles.table}>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.cartProducts.map(cartProduct =>
                        <tr key={cartProduct.product.id}>
                            <td>
                                <div className={styles.productCol}>
                                    <Image
                                        className={styles.productImage}
                                        alt={cartProduct.product.name}
                                        src={cartProduct.product.image}
                                        width={100}
                                        height={100}
                                        objectFit="cover"
                                        quality={100}
                                    />
                                    <div className={styles.productContent}>
                                        <p>{cartProduct.product.name}</p>
                                        <small>{cartProduct.product.tag}</small>
                                    </div>
                                </div>
                            </td>
                            <td>R${cartProduct.product.price.toFixed(2)}</td>
                            <td>{cartProduct.quantity}</td>
                            <td>R${cartProduct.getTotalPrice().toFixed(2)}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            {
                cart.cartProducts.length === 0 &&
                <div className={styles.emptyCart}>
                    <HiOutlineFilter className={styles.emptyCartIcon}/>
                    <p>Empty Cart</p>
                </div>
            }
        </>
    );
};

export default CartTable;