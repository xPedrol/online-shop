import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {StoreProvider} from "../contexts/Store";
import {SidebarProvider} from "../contexts/SidebarContext";
import Layout from "../components/Layout";
import {ToastProvider} from "../contexts/ToastProvider";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <SidebarProvider>
            <StoreProvider>
                <ToastProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ToastProvider>
            </StoreProvider>
        </SidebarProvider>
    </>;
}

export default MyApp;
