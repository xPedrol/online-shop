import type {NextPage} from 'next';
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Container from "../components/Container";
import {FiTrendingUp} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import {MdRecommend} from "react-icons/md";
import {useStore} from "../contexts/Store";
import {useEffect, useState} from "react";
import {TProduct} from "../models/Product";

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
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.promo}>
                    {/*<div className={styles.sliders}>*/}
                    {/*    <div className={styles.slider}>*/}
                    {/*        <img src={'/slide1.jpg'} alt={'slider-1'}/>*/}
                    {/*        <div className={styles.sliderContent}>*/}
                    {/*            <h3>Sales 20% OFF</h3>*/}
                    {/*            <h1>Women&apos;s Fashion</h1>*/}
                    {/*            <button>Shop now</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.slider}>*/}
                    {/*        <img src={'/slide3.jpg'} alt={'slider-3'}/>*/}
                    {/*        <div className={styles.sliderContent}>*/}
                    {/*            <h3>Sales from 69 dollars</h3>*/}
                    {/*            <h1>mega promotion</h1>*/}
                    {/*            <button>Shop now</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={styles.slider}>*/}
                    {/*        <img src={'/slide2.jpg'} alt={'slider-2'}/>*/}
                    {/*        <div className={styles.sliderContent}>*/}
                    {/*            <h3>Sales 10% OFF</h3>*/}
                    {/*            <h1>Men&apos;s Day</h1>*/}
                    {/*            <button>Shop now</button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    /!*<div className={styles.arrowRight}>*!/*/}
                    {/*    /!*    <IoIosArrowForward/>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    /!*<div className={styles.arrowLeft}>*!/*/}
                    {/*    /!*    <IoIosArrowBack/>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    /!*<div className={styles.sliderCount}>*!/*/}
                    {/*    /!*    <div className={styles.sliderOutlinePoint}></div>*!/*/}
                    {/*    /!*    <div className={styles.sliderOutlinePoint}></div>*!/*/}
                    {/*    /!*    <div className={styles.sliderOutlinePoint}></div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
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
            </main>
        </>
    );
};

export default Home;
