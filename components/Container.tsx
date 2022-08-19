import styles from '../styles/Container.module.scss';

const Container = ({children}: any) => {
    return (
        <main>
            <div className={styles.container}>
                {children}
            </div>
        </main>
    );
};
export default Container;