import styles from '../styles/ProductCard.module.scss';
import Link from "next/link";
import {TProduct} from "../models/Product";
import {useStore} from "../contexts/Store";
import {CartProduct} from "../models/CartProduct";
import {Cart} from "../models/Cart";

type Props = {
    product: TProduct;
}
const ProductCard = ({product}: Props) => {
    const {id, name, price, image: img, tag} = product;
    const {cart, setCart} = useStore();
    const addToCart = () => {
        const cartProduct = new CartProduct(product, 1);
        cart.addToCart(cartProduct);
        setCart(new Cart(cart));
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