import styles from '../styles/Navbar.module.scss';
import {AiOutlineShop} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import {BsCart3, BsHeart, BsPerson} from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container}`}>
                <div className={`${styles.topHeader}`}>
                    <div className={styles.startSide}>
                        <div className={styles.logo}>
                            {/*<AiOutlineShop fontSize={'50px'}/>*/}
                            <h1>Online Shop</h1>
                        </div>
                    </div>
                    <div className={styles.endSide}>
                        <BsCart3/>
                        <BsHeart/>
                        <BsPerson/>
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