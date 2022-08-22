import styles from '../styles/ProductCard.module.scss';
import Link from "next/link";
import {TProduct} from "../models/Product";

type Props = {
    product: TProduct;
}
const ProductCard = ({product}: Props) => {
    const {id, name, price, image: img,tag} = product;
    const card = <div className={styles.card}>
        {img &&
            <div className={styles.cardImageHeader}>
                <img src={img} alt={name}/>
            </div>
        }
        <div className={styles.cardBody}>
            <small className={styles.productTag}>{tag}</small>
            <h4 className={styles.productName}>{name}</h4>
            <button className={styles.productCartButton}>add to cart</button>
            <small className={styles.productPrice}>{price.toFixed(2)}</small>
        </div>
    </div>;
    return (
        <>
            {id ?
                <Link href={`/products/${id}`} passHref={true}><a className={styles.cardLink}>{card}</a></Link> : card}
        </>
    );
};

export default ProductCard;