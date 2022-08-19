import type {NextPage} from 'next';
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Container from "../components/Container";
import {FiTrendingUp} from "react-icons/fi";
import ProductCard from "../components/ProductCard";
import {MdRecommend} from "react-icons/md";

const Home: NextPage = () => {
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
                            <ProductCard url={`/products/tenis1`} name={'Tênis Nike 1'} price={'200.50'} tag={'Masculino / Shoes'} img={'/products/tenis1.webp'}/>
                            <ProductCard url={`/products/tenis2`} name={'Tênis Nike 2'} price={'159.90'} tag={'Masculino / Shoes'} img={'/products/tenis2.webp'}/>
                            <ProductCard url={`/products/blusa1`} name={'Camisa Nike 1'} price={'180.60'} tag={'Masculino / Clothes'} img={'/products/blusa1.webp'}/>
                            <ProductCard url={`/products/blusa2`} name={'Camisa Nike 2'} price={'115.00'} tag={'Masculino / Clothes'} img={'/products/blusa2.webp'}/>
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
                            <ProductCard url={`/products/watch1`} name={'Relógio 1'} price={'200.50'} tag={'Masculino / Watch'} img={'/products/watch1.jpg'}/>
                            <ProductCard url={`/products/watch3`} name={'Relógio 2'} price={'159.90'} tag={'Masculino / Watch'} img={'/products/watch3.jpg'}/>
                            <ProductCard url={`/products/watch2`} name={'Relógio 3'} price={'180.60'} tag={'Masculino / Watch'} img={'/products/watch2.webp'}/>
                            <ProductCard url={`/products/jacket1`} name={'Camisa Nike 2'} price={'115.00'} tag={'Masculino / Clothes'} img={'/products/jacket1.jpg'}/>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};

export default Home;
