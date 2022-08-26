import {useRouter} from "next/router";
import Container from "../../components/Container";
import stylesB from "../../styles/Breadcrumb.module.scss";
import styles from "../../styles/ProductPage.module.scss";
import {BsCart3, BsHeart, BsShare} from "react-icons/bs";
import {FiTrendingUp} from "react-icons/fi";
import ProductCard from "../../components/ProductCard";
import {useEffect, useState} from "react";
import {TProduct} from "../../models/Product";
import {useStore} from "../../contexts/StoreContext";
import SetTitle from "../../components/SetTitle";
import {useToastContext} from "../../contexts/ToastContext";

const ProductPage = () => {
    const {setActive, setToastMsg} = useToastContext();
    const router = useRouter();
    const {products: storeProducts, addToCart: sAddToCart, addToWishlist: sAddToWishlist} = useStore();
    const {id} = router.query;
    const [product, setProduct] = useState<TProduct>();
    const [recommendProducts, setRecommendProducts] = useState<TProduct[] | any[]>([]);
    const products = storeProducts;

    const [cartInput, setCartInput] = useState<number>(1);
    const addToCart = () => {
        if (product) {
            sAddToCart(product, cartInput);
            setToastMsg({
                title: 'Added to cart',
                msg: `${product.name} added to cart`,
            });
            setActive(true);
        }
    };
    const addToWishlist = () => {
        if (product) {
            sAddToWishlist(product);
            setToastMsg({
                title: 'Added to wishlist',
                msg: `${product.name} added to wishlist`,
            });
            setActive(true);
        }
    };

    useEffect(() => {
        const recommendProducts = products.filter((product, i) => i < 4);
        setRecommendProducts(recommendProducts);
        const product = products.find((product) => product.id === Number(id));
        setProduct(product);
    }, [id, products]);
    return (
        <>
            <SetTitle title={product?.name}/>
            <div className={styles.main}>
                <Container>
                    <div className={stylesB.breadcrumb}>
                        <div className={stylesB.breadcrumbItem}>
                            <a href="#">Home</a>
                        </div>
                        <div className={stylesB.breadcrumbItem}>
                            <a href="#">Product</a>
                        </div>
                        {product?.id &&
                            <div className={stylesB.breadcrumbItem}>
                                <a>{product.id}</a>
                            </div>
                        }
                    </div>
                    {product &&
                        <div className={styles.product}>
                            <div className={styles.productImage}>
                                <img src={product.image} alt={'product'}/>
                            </div>
                            <div className={styles.productInfo}>
                                <div className={styles.productHeader}>
                                    <div>
                                        <div className={styles.productInfoTitle}>
                                            <h1>{product.name}</h1>
                                        </div>
                                        <div className={styles.productInfoPrice}>
                                            <h2>{product.price.toFixed(2)}</h2>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className={styles.productInfoDescription}>
                                    <p>
                                        {product.description}
                                    </p>
                                </div>
                                <div className={styles.productInfoActions}>
                                    <div className={styles.productInfoCart}>
                                        <input defaultValue={cartInput}
                                               onChange={(e) => setCartInput(Number(e.target.value))} type={'number'}/>
                                        <button onClick={addToCart}><BsCart3 className={styles.icon20px}/> Add to cart
                                        </button>
                                    </div>
                                    <div className={styles.productInfoWishlist}>
                                        <button onClick={addToWishlist}><BsHeart className={styles.icon20px}/> Add to
                                            Wishlist
                                        </button>
                                    </div>
                                    <div className={styles.productInfoWishlist}>
                                        <button><BsShare className={styles.icon20px}/> Share this product</button>
                                    </div>
                                </div>
                                <div className={styles.productInfoMore}>
                                    <h4>Tag: {product.tag}</h4>
                                    <h4>More products from this seller</h4>
                                </div>
                                <div className={styles.buy}>
                                    <button>Buy</button>
                                </div>
                            </div>
                        </div>}
                    <hr/>
                    <div className={styles.trendingProducts}>
                        <div className={styles.description}>
                            <div className={styles.descriptionTitle}>
                                <h2>Trending Products</h2>
                                <FiTrendingUp className={styles.trendingIcon}/>
                            </div>
                            <p>Most selling products of the month</p>
                        </div>
                        <div className={styles.trendingProductsList}>
                            {recommendProducts.map(product =>
                                <ProductCard key={product.id} product={product}/>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default ProductPage;