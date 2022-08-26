import styles from '../styles/Sidebar.module.scss';
import {VscChromeClose} from "react-icons/vsc";
import {useSidebarContext} from "../contexts/SidebarContext";
import Link from "next/link";
import ActionIcons from "./ActionIcons";
import {memo} from "react";
import {navList} from "../contants/navList";

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
                    {
                        navList.map(item =>
                            <li key={item.id} onClick={closeSidebar}>
                                <Link href={item.url} passHref={true}>
                                    <a>
                                        {/*<HiOutlineHome className={styles.sidebarSubMenuIcon}/>*/}
                                        {/*<IconBase>{item.icon as any}</IconBase>*/}
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};
export default memo(Sidebar);