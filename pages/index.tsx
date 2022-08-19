import type {NextPage} from 'next';
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Container from "../components/Container";
import {FiTrendingUp} from "react-icons/fi";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
            <Container>
                <div className={styles.sliders}>
                    <div className={styles.slider}>
                        <img src={'/slide1.jpg'} alt={'slider-3'}/>
                        <div className={styles.sliderContent}>
                            <h3>Sales 20% OFF</h3>
                            <h1>Women's Fashion</h1>
                            <button>Shop now</button>
                        </div>
                    </div>
                </div>
                <div className={styles.trendingProducts}>
                   <div className={styles.description}>
                       <div className={styles.descriptionTitle}>
                           <h2>Trending Products</h2>
                           <FiTrendingUp className={styles.trendingIcon}/>
                       </div>
                       <p>Most selling products of the month</p>
                   </div>
                    <div className={styles.trendingProductsList}>
                        <div>dasda</div>
                        <div>dasda</div>
                        <div>da</div>
                        <div>da</div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;
