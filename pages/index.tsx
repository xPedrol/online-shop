import type {NextPage} from 'next';
import Navbar from "../components/Navbar";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Navbar/>
        </>
    );
};

export default Home;
