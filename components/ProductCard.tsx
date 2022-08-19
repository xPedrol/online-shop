import styles from '../styles/ProductCard.module.scss';
import Link from "next/link";

type Props = {
    img?: string;
    tag: string;
    name: string;
    price: string;
    url?: string;
}
const ProductCard = ({img, tag, name, price, url}: Props) => {
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
            <small className={styles.productPrice}>{price}</small>
        </div>
    </div>;
    return (
        <>
            {url ? <Link href={url} passHref={true}><a className={styles.cardLink}>{card}</a></Link> : card}
        </>
    );
};

export default ProductCard;