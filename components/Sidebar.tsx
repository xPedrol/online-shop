import styles from '../styles/Sidebar.module.scss';
import {VscChromeClose} from "react-icons/vsc";
import {useSidebarContext} from "../contexts/SidebarContext";
import Link from "next/link";
import {BiHomeAlt} from "react-icons/bi";
import {HiOutlineHome} from "react-icons/hi";
import {IoShirtOutline} from "react-icons/io5";
import {MdPermContactCalendar} from "react-icons/md";
import {RiContactsBook2Line, RiContactsLine} from "react-icons/ri";
import ActionIcons from "./ActionIcons";

const Sidebar = () => {
    const useSidebar = useSidebarContext();
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <VscChromeClose className={styles.sidebarCloseIcon} onClick={useSidebar.toggleSidebar}/>
            </div>
            <div className={styles.sidebarBody}>
                    <ActionIcons parentDivClass={styles.sidebarMenu}/>
                <ul className={styles.sidebarSubMenu}>
                    <li><Link href={'/'} passHref={true}><a><HiOutlineHome className={styles.sidebarSubMenuIcon}/> Home</a></Link></li>
                    <li><a><IoShirtOutline className={styles.sidebarSubMenuIcon}/>Products</a></li>
                    <li><a><RiContactsLine className={styles.sidebarSubMenuIcon}/>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;