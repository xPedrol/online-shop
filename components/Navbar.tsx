import styles from '../styles/Navbar.module.scss';
import {AiOutlineMenu} from "react-icons/ai";
import {BiSearchAlt} from "react-icons/bi";
import Link from "next/link";
import {FaShopify} from "react-icons/fa";
import ActionIcons from "./ActionIcons";
import {useSidebarContext} from "../contexts/SidebarContext";

const Navbar = () => {
    const useSidebar = useSidebarContext();
    const toggleMenu = () => {
        useSidebar.toggleSidebar();
    };

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
                        <AiOutlineMenu className={styles.menuIcon} onClick={toggleMenu}/>
                    </div>
                    <div className={styles.endSide}>
                        <ActionIcons parentDivClass={styles.endSideActions}/>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href={'/'} passHref={true}><a>Home</a></Link></li>
                        <li><Link href={'/products'} passHref={true}><a>Products</a></Link></li>
                        <li><Link href={'/contact'} passHref={true}><a>Contact</a></Link></li>
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