import styles from "../styles/NavbarSearch.module.scss";
import {BiSearchAlt} from "react-icons/bi";
import {useState} from "react";
import {constProducts} from "../contants/products";
import Link from "next/link";
import {TbHourglassEmpty} from "react-icons/tb";
import Image from "next/image";

const NavbarSearch = () => {
    const [products, setProducts] = useState(constProducts);
    const search = (searchTerm: string | null) => {
        if (!searchTerm || searchTerm === '') {
            setProducts(constProducts);
        } else {
            setProducts(products.filter((product) => {
                const productName = product.name.toLowerCase();
                if (searchTerm) {
                    searchTerm = searchTerm.trim().toLowerCase();
                    return productName.includes(searchTerm) || searchTerm.includes(productName);
                }
            }));
        }
    };
    const toggleDropdown = () => {
        const activeClass = `${styles.active}`;
        const searchInput = document.querySelector(`#searchInput`);
        const searchDropdown = document.querySelector(`.${styles.searchDropdown}`);
        if (searchDropdown) {
            if (searchDropdown.classList.contains(activeClass)) {
                searchDropdown.classList.remove(activeClass);
                (searchInput as any)['value'] = null;
            } else {
                searchDropdown.classList.add(activeClass);
                if (!(searchInput as any)['value'] || (searchInput as any)['value'] === '') {
                    search(null);
                }
            }
        }
    };
    return (
        <div className={styles.search}>
            <input id={'searchInput'} placeholder={'Pesquisar...'} onChange={(e) => search(e.target.value)}
                   onFocus={toggleDropdown}
                   onBlur={toggleDropdown}/>
            <button aria-label={'Products search button'} title={'Products search button'}>
                <BiSearchAlt className={styles.searchIcon}/>
            </button>
            <div className={styles.searchDropdown}>
                <div className={styles.searchDropdownContent}>
                    {
                        products && products.length > 0 ? products.map((product) =>
                                <Link key={product.id} href={`/products/${product.id}`} passHref={true}>
                                    <div className={styles.searchDropdownItem}>
                                        <Image
                                            className={styles.productImage}
                                            alt={product.name}
                                            src={product.image}
                                            width={70}
                                            height={70}
                                            objectFit="cover"
                                            quality={100}
                                        />
                                        <div className={styles.cartItemContent}>
                                            <h5>{product.name}</h5>
                                            <p>R${product.price.toFixed(2)}</p>
                                            <button>Show</button>
                                        </div>
                                    </div>
                                </Link>
                            ) :
                            <div className={styles.emptySearch}>
                                <TbHourglassEmpty className={styles.emptySearchIcon}/>
                                <p>Empty Search</p>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};
export default NavbarSearch;