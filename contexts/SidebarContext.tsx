import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import styles from "../styles/Sidebar.module.scss";

type TSidebarContext = {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}
const sidebarContext = createContext({} as TSidebarContext);
type TSidebarProviderProps = {
    children: ReactNode;

}
export const SidebarProvider = ({children}: TSidebarProviderProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => {
        const sidebar = document.querySelector(`.${styles.sidebar}`);
        const body = document.querySelector('body');
        if (isSidebarOpen) {
            body?.classList.add(styles.overflowHidden);
            sidebar?.classList.add(styles.opened);
        } else {
            sidebar?.classList.remove(styles.opened);
            body?.classList.remove(styles.overflowHidden);
        }
    }, [isSidebarOpen]);
    return <sidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen, toggleSidebar}}>
        {children}
    </sidebarContext.Provider>;
};

export const useSidebarContext = () => {
    const context = useContext(sidebarContext);
    if (context === undefined) {
        throw new Error("useSidebarContext must be used within a SidebarProvider");
    }
    return context;
};