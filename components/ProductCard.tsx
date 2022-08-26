import styles from '../styles/ProductCard.module.scss';
import Link from "next/link";
import {TProduct} from "../models/Product";
import {useStore} from "../contexts/StoreContext";
import {useToastContext} from "../contexts/ToastContext";

type Props = {
    product: TProduct;
}
const ProductCard = ({product}: Props) => {
    const {setActive, setToastMsg} = useToastContext();
    const {id, name, price, image: img, tag} = product;
    const {addToCart: sAddToCart} = useStore();
    const addToCart = () => {
        sAddToCart(product,1);
        setToastMsg({
            title: 'Added to cart',
            msg: `${name} added to cart`,
        });
        setActive(true);
    };
    const ProductLink = ({children}: any) => {
        return <Link href={`/products/${id}`} passHref={true}><a className={styles.cardLink}>{children}</a></Link>;
    };
    const card = <div className={styles.card}>
        {img &&

            <div className={styles.cardImageHeader}>
                <ProductLink><img src={img} alt={name}/></ProductLink>
            </div>
        }
        <div className={styles.cardBody}>
            <ProductLink><small className={styles.productTag}>{tag}</small></ProductLink>
            <ProductLink><h4 className={styles.productName}>{name}</h4></ProductLink>
            <button className={styles.productCartButton} onClick={addToCart}>add to cart</button>
            <ProductLink><small className={styles.productPrice}>{price.toFixed(2)}</small></ProductLink>
        </div>
    </div>;
    return (
        <>
            {card}
        </>
    );
};

export default ProductCard;