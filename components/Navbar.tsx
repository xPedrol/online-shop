import styles from '../styles/Navbar.module.scss';
import {AiOutlineShop} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import {BsCart3, BsHeart, BsPerson} from "react-icons/bs";
import Link from "next/link";
import {FaShopify, FaShoppingBag} from "react-icons/fa";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container}`}>
                <div className={`${styles.topHeader}`}>
                    <div className={styles.startSide}>
                        <div className={styles.logo}>
                            <FaShopify className={styles.logoIcon}/>
                            <h1>Online Shop</h1>
                            <h2>SHOP</h2>
                        </div>
                    </div>
                    <div className={styles.endSide}>
                        <div className={styles.cart}>
                            <BsCart3 className={styles.endSideIcon}/>
                            <div className={styles.cartDropdown}>
                                <div className={styles.cartContent}>
                                    <div className={styles.cartItem}>
                                        <img src={'/products/tenis1.webp'} alt={'test'}/>
                                        <div className={styles.cartItemContent}>
                                            <h5>Tenis 1</h5>
                                            <p>2x - R$ 400,00</p>
                                            <button>Remover</button>
                                        </div>

                                    </div>
                                    <div className={styles.cartItem}>
                                        <img src={'/products/tenis2.webp'} alt={'test'}/>
                                        <div className={styles.cartItemContent}>
                                            <h5>Tenis 2</h5>
                                            <p>1x - R$ 150,90</p>
                                            <button>Remover</button>
                                        </div>

                                    </div>
                                    <div className={styles.cartItem}>
                                        <img src={'/products/blusa1.webp'} alt={'test'}/>
                                        <div className={styles.cartItemContent}>
                                            <h5>Tenis 1</h5>
                                            <p>2x - R$ 450,60</p>
                                            <button>Remover</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <BsHeart className={styles.endSideIcon}/>
                        <BsPerson className={styles.endSideIcon}/>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href={'/'} passHref={true}><a>Home</a></Link></li>
                        <li><a>Produtos</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                    <div className={styles.search}>
                        <input placeholder={'Pesquisar...'}/>
                        <button>
                            <BiSearchAlt className={styles.searchIcon}/>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;