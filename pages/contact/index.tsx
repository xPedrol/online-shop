import SetTitle from "../../components/SetTitle";
import stylesB from "../../styles/Breadcrumb.module.scss";
import Container from "../../components/Container";
import Link from "next/link";
import styles from "../../styles/Contact.module.scss";

const ContactPage = () => {
    return (
        <>
            <SetTitle title={'Contact'}/>
            <div className={styles.main}>
                <Container>
                    <div className={stylesB.breadcrumb}>
                        <div className={stylesB.breadcrumbItem}>
                            <Link href={'/'} passHref={true}><a>Home</a></Link>
                        </div>
                        <div className={stylesB.breadcrumbItem}>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.col6}>
                            <label htmlFor={'name'}>Name</label>
                            <input id={'name'} placeholder={'Type your name...'}/>
                        </div>
                        <div className={styles.col6}>
                            <label htmlFor={'email'}>Email</label>
                            <input id={'email'} placeholder={'Type your email address...'}/>
                        </div>
                        <div className={styles.col12}>
                            <label htmlFor={'message'}>Message</label>
                            <textarea id={'message'} placeholder={'Type your message...'} rows={10}></textarea>
                        </div>
                        <div className={styles.col12}>
                            <button>Send</button>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};
export default ContactPage;