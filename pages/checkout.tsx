import SetTitle from "../components/SetTitle";
import styles from "../styles/Checkout.module.scss";
import stylesB from "../styles/Breadcrumb.module.scss";
import Link from "next/link";
import Container from "../components/Container";
import {useStore} from "../contexts/StoreContext";
import CartTable from "../components/CartTable";
import {useToastContext} from "../contexts/ToastContext";

const CheckoutPage = () => {
    const {cart, addToPurchases} = useStore();
    const {setActive, setToastMsg} = useToastContext();
    const addPurchase = () => {
        addToPurchases(cart);
        setToastMsg({
            title: 'New purchase',
            msg: 'Purchase added with success',
        });
        setActive(true);
    };
    return (
        <>
            <SetTitle title={'Checkout'}/>
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
                        <CartTable cart={cart}/>
                        <div className={styles.checkoutFinish}>
                            <button onClick={addPurchase}>Finish shopping</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default CheckoutPage;