import styles from '../styles/Navbar.module.scss';
import {AiOutlineMenu} from "react-icons/ai";
import Link from "next/link";
import {FaShopify} from "react-icons/fa";
import ActionIcons from "./ActionIcons";
import {useSidebarContext} from "../contexts/SidebarContext";
import NavbarSearch from "./NavbarSearch";
import {navList} from "../contants/navList";

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
                        {
                            navList.map(item=><li key={item.id}><Link href={item.url} passHref={true}><a>{item.name}</a></Link></li>)
                        }
                    </ul>
                    <NavbarSearch/>
                </nav>
            </div>
        </header>
    );
};


export default Navbar;