import styles from '../styles/Purchases.module.scss';
import SetTitle from "../components/SetTitle";
import Container from "../components/Container";
import stylesB from "../styles/Breadcrumb.module.scss";
import Link from "next/link";
import {useStore} from "../contexts/StoreContext";
import CartTable from "../components/CartTable";
import {useEffect} from "react";
import {IoIosArrowDown} from "react-icons/io";

const PurchasesPage = () => {
    const {purchases} = useStore();
    useEffect(() => {
        const purchaseAccordionList = document.querySelectorAll(`.${styles.purchaseAccordion}`);
        if(purchaseAccordionList && purchaseAccordionList.length > 0) {
            const newspaperSpinning = [
                { transform: 'translateX(-50%)',opacity: 0.5 },
                { transform: 'translateX(0)',opacity: 1 }
            ];
            const newspaperTiming = {
                duration: 0,
                iterations: 1,
            }
            purchaseAccordionList.forEach((accordion,i) => {
                newspaperTiming.duration = 200 + (i * 100);
                accordion.animate(newspaperSpinning, newspaperTiming);
            });
        }
    }, [purchases]);
    const toggleAccordion = (e: any) => {
        const target = e.target;
        target.parentElement.classList.toggle(styles.closed);
        // target.nextElementSibling.classList.toggle(styles.active);
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
                            <a>Purchases</a>
                        </div>
                    </div>
                    <div className={styles.purchases}>
                        {
                            purchases.carts.map((cart, i) => (
                                <div onClick={(e) => toggleAccordion(e)} id={`${i}`} key={i}
                                     className={styles.purchaseAccordion}>
                                    <div className={styles.purchaseAccordionHeader}>
                                        <div className={styles.purchaseAccordionHeaderLeft}>
                                            <h3>Purchase #{i}</h3>
                                        </div>
                                        <div className={styles.purchaseAccordionHeaderRight}>
                                            <IoIosArrowDown className={styles.arrowUpIcon}/>
                                        </div>
                                    </div>
                                    <div className={styles.purchaseAccordionBody}>
                                        <CartTable cart={cart}/>
                                    </div>
                                    <div className={styles.purchaseAccordionFooter}>
                                        <div className={styles.purchaseAccordionFooterLeft}>
                                            <h3>Total</h3>
                                        </div>
                                        <div className={styles.purchaseAccordionFooterRight}>
                                            <h3>
                                                R${cart.getTotal().toFixed(2)}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </div>
        </>
    );
};

export default PurchasesPage;