import {ReactNode, useEffect, useMemo} from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../styles/Layout.module.scss";
import {useSidebarContext} from "../contexts/SidebarContext";

type TLayoutProps = {
    children: ReactNode;
    title?: string;
}
const Layout = ({children, title}: TLayoutProps) => {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <main className={styles.main}>{children}</main>
        </>
    );
};
export default Layout;