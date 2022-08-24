import SetTitle from "../../components/SetTitle";
import stylesB from "../../styles/Breadcrumb.module.scss";
import Container from "../../components/Container";
import Link from "next/link";
import styles from "../../styles/Contact.module.scss";
import {FiTrendingUp} from "react-icons/fi";
import {BiMessageAltDetail} from "react-icons/bi";

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
                       <div className={styles.col12}>
                           <div className={styles.description}>
                               <BiMessageAltDetail className={styles.trendingIcon}/>
                               <div className={styles.descriptionTitle}>
                                   <h2>Contact us</h2>
                               </div>
                               <p>Fill in the blank spaces below and send us a message</p>
                           </div>
                       </div>
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