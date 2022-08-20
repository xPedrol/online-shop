import Head from "next/head";
import Navbar from "../../components/Navbar";
import {useRouter} from "next/router";
import Container from "../../components/Container";
import stylesB from "../../styles/Breadcrumb.module.scss";
import styles from "../../styles/ProductPage.module.scss";
import {BsCart3, BsHeart, BsShare} from "react-icons/bs";
import {FiTrendingUp} from "react-icons/fi";
import ProductCard from "../../components/ProductCard";

const ProductPage = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <Container>
                    <div className={stylesB.breadcrumb}>
                        <div className={stylesB.breadcrumbItem}>
                            <a href="#">Home</a>
                        </div>
                        <div className={stylesB.breadcrumbItem}>
                            <a href="#">Product</a>
                        </div>
                        {slug &&
                            <div className={stylesB.breadcrumbItem}>
                                <a>{slug}</a>
                            </div>
                        }
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productImage}>
                            <img src={`/products/${slug}.webp`} alt={'product'}/>
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.productHeader}>
                                <div>
                                    <div className={styles.productInfoTitle}>
                                        <h1>{slug}</h1>
                                    </div>
                                    <div className={styles.productInfoPrice}>
                                        <h2>R$ 69,90</h2>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className={styles.productInfoDescription}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in leo leo. Donec
                                    aliquet mauris ac consequat ornare. Pellentesque eget leo tempor, venenatis mauris
                                    sed, viverra ante. Donec tincidunt mauris vel tincidunt ultricies. Sed sed libero
                                    hendrerit elit gravida vulputate.
                                </p>
                            </div>
                            <div className={styles.productInfoActions}>
                                <div className={styles.productInfoCart}>
                                    <input defaultValue={1} type={'number'}/>
                                    <button><BsCart3 className={styles.icon20px}/> Add to cart</button>
                                </div>
                                <div className={styles.productInfoWishlist}>
                                    <button><BsHeart className={styles.icon20px}/> Add to Wishlist</button>
                                </div>
                                <div className={styles.productInfoWishlist}>
                                    <button><BsShare className={styles.icon20px}/> Share this product</button>
                                </div>
                            </div>
                            <div className={styles.productInfoMore}>
                                <h4>Category: Product</h4>
                                <h4>More products from this seller</h4>
                            </div>
                            <div className={styles.buy}>
                                <button>Buy</button>
                            </div>
                        </div>
                    </div>
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
                            <ProductCard url={`/products/tenis1`} name={'Tênis Nike 1'} price={'200.50'} tag={'Masculino / Shoes'} img={'/products/tenis1.webp'}/>
                            <ProductCard url={`/products/tenis2`} name={'Tênis Nike 2'} price={'159.90'} tag={'Masculino / Shoes'} img={'/products/tenis2.webp'}/>
                            <ProductCard url={`/products/blusa1`} name={'Camisa Nike 1'} price={'180.60'} tag={'Masculino / Clothes'} img={'/products/blusa1.webp'}/>
                            <ProductCard url={`/products/blusa2`} name={'Camisa Nike 2'} price={'115.00'} tag={'Masculino / Clothes'} img={'/products/blusa2.webp'}/>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};
export default ProductPage;