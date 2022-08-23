import Head from "next/head";
import {useMemo} from "react";

type TSetTitleProps = {
    title?: string;
}
const SetTitle = ({title}: TSetTitleProps) => {
    title = useMemo(() => {
        return title ? `SHOP - ${title}` : 'ONLINE SHOP';
    }, [title]);
    return <Head>
        <title>{title}</title>
        <meta name={'description'} content={'Site para portfólio. E-commerce de roupas feita em Next.js, css e SASS.'}/>
    </Head>;
};

export default SetTitle;