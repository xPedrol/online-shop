import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {StoreProvider} from "../contexts/StoreContext";
import {SidebarProvider} from "../contexts/SidebarContext";
import Layout from "../components/Layout";
import {ToastProvider} from "../contexts/ToastContext";

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
