import styles from "../styles/NavbarSearch.module.scss";
import {BiSearchAlt} from "react-icons/bi";
import {useState} from "react";
import {constProducts} from "../contants/products";
import Link from "next/link";

const NavbarSearch = () => {
    const [products, setProducts] = useState(constProducts);
    const search = (searchTerm: string) => {
        if (!searchTerm || searchTerm === '') {
            setProducts(constProducts);
        } else {
            setProducts(products.filter((product) => {
                const productName = product.name.toLowerCase();
                searchTerm = searchTerm.trim().toLowerCase();
                return productName.includes(searchTerm) || searchTerm.includes(productName);
            }));
        }
    };
    const toggleDropdown = () => {
        const activeClass = `${styles.active}`;
        const searchDropdown = document.querySelector(`.${styles.searchDropdown}`);
        if (searchDropdown) {
            if (searchDropdown.classList.contains(activeClass)) {
                console.warn(searchDropdown);
                searchDropdown.classList.remove(activeClass);
            } else {
                searchDropdown.classList.add(activeClass);
            }
        }
    };
    return (
        <div className={styles.search}>
            <input placeholder={'Pesquisar...'} onChange={(e) => search(e.target.value)} onFocus={toggleDropdown}
                   onBlur={toggleDropdown}/>
            <button>
                <BiSearchAlt className={styles.searchIcon}/>
            </button>
            <div className={styles.searchDropdown}>
                <div className={styles.searchDropdownContent}>
                    {
                        products.map((product) =>
                            <Link key={product.id} href={`/products/${product.id}`} passHref={true}>
                                <div className={styles.searchDropdownItem}>
                                    <img src={product.image} alt={product.name}/>
                                    <div className={styles.cartItemContent}>
                                        <h5>{product.name}</h5>
                                        <p>R${product.price.toFixed(2)}</p>
                                        <button>Show</button>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};
export default NavbarSearch;