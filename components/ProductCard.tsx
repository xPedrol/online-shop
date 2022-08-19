import styles from '../styles/ProductCard.module.scss';

type Props = {
    img?: string;
    tag: string;
    name: string;
    price: string;
}
const ProductCard = ({img, tag, name, price}: Props) => {
    return (
        <div className={styles.card}>
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
        </div>
    );
};

export default ProductCard;