import styles from '../styles/Container.module.scss';

type Props = {
    children: any;
    props?: any;
}
const FluidContainer = ({children, props}:Props) => {
    return (
        <div className={styles.fluidContainer}>
            {children}
        </div>
    );
};
export default FluidContainer;