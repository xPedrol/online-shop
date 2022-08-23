import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {StoreProvider} from "../contexts/Store";
import {SidebarProvider} from "../contexts/SidebarContext";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <SidebarProvider>
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
        </SidebarProvider>
    </>;
}

export default MyApp;
