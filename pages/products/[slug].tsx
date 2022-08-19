import Head from "next/head";
import Navbar from "../../components/Navbar";
import {useRouter} from "next/router";
import Container from "../../components/Container";
import stylesB from "../../styles/Breadcrumb.module.scss";
import styles from "../../styles/ProductPage.module.scss";
import {BsCart3} from "react-icons/bs";

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
                                        <h1>Produto {slug}</h1>
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
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
};
export default ProductPage;