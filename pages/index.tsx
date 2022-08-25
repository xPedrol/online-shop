import type {NextPage} from 'next';
import styles from "../styles/Home.module.scss";
import Container from "../components/Container";
import {FiTrendingUp} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import {MdRecommend} from "react-icons/md";
import {useStore} from "../contexts/Store";
import {useEffect, useState} from "react";
import {TProduct} from "../models/Product";
import SetTitle from "../components/SetTitle";

const Home: NextPage = () => {
    const store = useStore();
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    useEffect(() => {
        const auxTrendingProducts: TProduct | any = [];
        const auxRecommendedProducts: TProduct | any = [];
        for (let i = 0; i < store.products.length; i++) {
            if (i < 4) {
                auxTrendingProducts.push(store.products[i]);
            } else {
                auxRecommendedProducts.push(store.products[i]);
            }
        }
        setTrendingProducts(auxTrendingProducts);
        setRecommendedProducts(auxRecommendedProducts);
    }, [store.products]);
    return (
        <>
            <SetTitle title={'Home'}/>
            <div className={styles.promo}>
                <div className={styles.promoContent}>
                    <div className={styles.promoContentText}>
                        <h4>ENJOY THE SUPER OFFER</h4>
                        <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e
                            vem sendo utilizado desde o século XVI, quando um </p>
                        <button>Ver promoções</button>
                    </div>
                </div>
            </div>
            <Container>
                <div className={styles.trendingProducts}>
                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}>
                            <h2>Trending Products</h2>
                            <FiTrendingUp className={styles.trendingIcon}/>
                        </div>
                        <p>Most selling products of the month</p>
                    </div>
                    <div className={styles.trendingProductsList}>
                        {trendingProducts.map((product: TProduct) =>
                            <ProductCard key={product.id} product={product}/>
                        )}
                    </div>
                </div>
                <div className={styles.collections}>
                    <div className={styles.womenCollection}>
                        <div className={styles.collectionContent}>
                            <h3>Sales 10% OFF</h3>
                            <h1>Women&apos;s Collection</h1>
                            {/*<button>See Offers</button>*/}
                        </div>
                    </div>
                    <div className={styles.menCollection}>
                        <div className={styles.collectionContent}>
                            <h3>Sales 10% OFF</h3>
                            <h1>Men&apos;s Collection</h1>
                            {/*<button>See Offers</button>*/}
                        </div>
                    </div>
                    <div className={styles.genericCollection}>
                        <div className={styles.collectionContent}>
                            <h3>Sales 10% OFF</h3>
                            <h1>Generic&apos;s Collection</h1>
                            {/*<button>See Offers</button>*/}
                        </div>
                    </div>
                </div>
                <div className={styles.trendingProducts}>
                    <div className={styles.description}>
                        <div className={styles.descriptionTitle}>
                            <h2>Recommend Products</h2>
                            <MdRecommend className={styles.trendingIcon}/>
                        </div>
                        <p>OUR BEST PRODUCTS RECOMMENDED FOR YOU</p>
                    </div>
                    <div className={styles.trendingProductsList}>
                        {recommendedProducts.map((product: TProduct) =>
                            <ProductCard key={product.id} product={product}/>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
