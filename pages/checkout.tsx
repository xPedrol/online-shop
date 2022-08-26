import SetTitle from "../components/SetTitle";
import styles from "../styles/Checkout.module.scss";
import stylesB from "../styles/Breadcrumb.module.scss";
import Link from "next/link";
import Container from "../components/Container";
import {useStore} from "../contexts/Store";
import {TbHourglassEmpty} from "react-icons/tb";
import {HiOutlineFilter} from "react-icons/hi";

const CheckoutPage = () => {
    const {cart} = useStore();
    return (
        <>
            <SetTitle title={'Products'}/>
            <div className={styles.main}>
                <Container>
                    <div className={stylesB.breadcrumb}>
                        <div className={stylesB.breadcrumbItem}>
                            <Link href={'/'} passHref={true}><a>Home</a></Link>
                        </div>
                        <div className={stylesB.breadcrumbItem}>
                            <a>Products</a>
                        </div>
                    </div>
                    <div className={styles.checkout}>
                        <div className={styles.responsiveTable}>
                            <table>
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
                                                <img alt={cartProduct.product.name} src={cartProduct.product.image}/>
                                                <div>
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
                        <div className={styles.checkoutFinish}>
                            <button>Finish shopping</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default CheckoutPage;