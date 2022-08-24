import SetTitle from "../../components/SetTitle";
import styles from "../../styles/ProductsPage.module.scss";
import stylesB from "../../styles/Breadcrumb.module.scss";
import Container from "../../components/Container";
import Link from "next/link";
import {TProduct} from "../../models/Product";
import ProductCard from "../../components/ProductCard";
import {useEffect, useState} from "react";
import {constProducts} from "../../contants/products";

const ProductsPage = () => {
    const [products, setProducts] = useState<TProduct[]>([]);
    useEffect(() => {
        setProducts(constProducts);
    }, []);
    return (
        <>
            <SetTitle title={'Products'}/>
            <div className={styles.main}>
                <Container>
                    <div className={stylesB.breadcrumb}>
                        <div className={stylesB.breadcrumbItem}>
                            <Link href={'/'} passHref={true}><a>Home</a></Link>
                        </div>
                        <div className={stylesB.breadcrumbItem}>
                            <a>Products</a>
                        </div>
                    </div>
                    <div className={styles.products}>
                        <div className={styles.filters}>
                            <div className={styles.categories}>
                                <h3>Categories</h3>
                                <ul className={styles.categoriesList}>
                                    <li>Men&apos;s Clothes</li>
                                    <li>Men&apos;s Shoes</li>
                                    <li>Men&apos;s Watches</li>
                                    <li>Women&apos;s Handbags</li>
                                    <li>Women&apos;s Glasses</li>
                                </ul>
                            </div>
                            <div className={styles.priceRange}>
                                <h3>Price Range</h3>
                                <div className={styles.priceRangeInput}>
                                    <input type={'range'}/>
                                    <div className={styles.prices}>
                                        <small>R$ 50,00</small>
                                        <small>R$ 400,00</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.productsList}>
                            {products.map((product: TProduct) =>
                                <ProductCard key={product.id} product={product}/>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ProductsPage;