import type {NextPage} from 'next';
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Container from "../components/Container";
import {FiTrendingUp} from "react-icons/fi";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import ProductCard from "../components/ProductCard";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.promo}>
                    <div className={styles.sliders}>
                        <div className={styles.slider}>
                            <img src={'/slide1.jpg'} alt={'slider-1'}/>
                            <div className={styles.sliderContent}>
                                <h3>Sales 20% OFF</h3>
                                <h1>Women&apos;s Fashion</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                        <div className={styles.slider}>
                            <img src={'/slide3.jpg'} alt={'slider-3'}/>
                            <div className={styles.sliderContent}>
                                <h3>Sales from 69 dollars</h3>
                                <h1>mega promotion</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                        <div className={styles.slider}>
                            <img src={'/slide2.jpg'} alt={'slider-2'}/>
                            <div className={styles.sliderContent}>
                                <h3>Sales 10% OFF</h3>
                                <h1>Men&apos;s Day</h1>
                                <button>Shop now</button>
                            </div>
                        </div>
                        {/*<div className={styles.arrowRight}>*/}
                        {/*    <IoIosArrowForward/>*/}
                        {/*</div>*/}
                        {/*<div className={styles.arrowLeft}>*/}
                        {/*    <IoIosArrowBack/>*/}
                        {/*</div>*/}
                        {/*<div className={styles.sliderCount}>*/}
                        {/*    <div className={styles.sliderOutlinePoint}></div>*/}
                        {/*    <div className={styles.sliderOutlinePoint}></div>*/}
                        {/*    <div className={styles.sliderOutlinePoint}></div>*/}
                        {/*</div>*/}
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
                            <ProductCard name={'Tênis Nike 1'} price={'200.50'} tag={'Masculino / Shoes'} img={'/products/tenis1.webp'}/>
                            <ProductCard name={'Tênis Nike 2'} price={'159.90'} tag={'Masculino / Shoes'} img={'/products/tenis2.webp'}/>
                            <ProductCard name={'Camisa Nike 1'} price={'180.60'} tag={'Masculino / T-Shirt'} img={'/products/blusa1.webp'}/>
                            <ProductCard name={'Camisa Nike 2'} price={'115.00'} tag={'Masculino / T-Shirt'} img={'/products/blusa2.webp'}/>
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
                </Container>
            </main>
        </>
    );
};

export default Home;
