import styles from '../styles/Sidebar.module.scss';
import {VscChromeClose} from "react-icons/vsc";
import {useSidebarContext} from "../contexts/SidebarContext";
import Link from "next/link";
import {HiOutlineHome} from "react-icons/hi";
import {IoShirtOutline} from "react-icons/io5";
import {RiContactsLine} from "react-icons/ri";
import ActionIcons from "./ActionIcons";
import {memo} from "react";

const Sidebar = () => {
    const useSidebar = useSidebarContext();
    const closeSidebar = () => {
        useSidebar.setIsSidebarOpen(false);
    };
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <VscChromeClose className={styles.sidebarCloseIcon} onClick={useSidebar.toggleSidebar}/>
            </div>
            <div className={styles.sidebarBody}>
                    <ActionIcons parentDivClass={styles.sidebarMenu}/>
                <ul className={styles.sidebarSubMenu}>
                    <li onClick={closeSidebar}><Link href={'/'} passHref={true}><a><HiOutlineHome className={styles.sidebarSubMenuIcon}/> Home</a></Link></li>
                    <li onClick={closeSidebar}><Link href={'/products'} passHref={true}><a><IoShirtOutline className={styles.sidebarSubMenuIcon}/>Products</a></Link></li>
                    <li onClick={closeSidebar}><Link href={'/contact'} passHref={true}><a><RiContactsLine className={styles.sidebarSubMenuIcon}/>Contact</a></Link></li>
                </ul>
            </div>
        </div>
    );
};
export default memo(Sidebar);