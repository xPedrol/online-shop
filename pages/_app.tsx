import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {StoreProvider} from "../contexts/Store";
import {SidebarProvider} from "../contexts/SidebarContext";
import Layout from "../components/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <SidebarProvider>
        <StoreProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StoreProvider>
        </SidebarProvider>
    </>;
}

export default MyApp;
