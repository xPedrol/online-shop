import {useEffect, useState} from "react";
import styles from '../styles/Toast.module.scss';
type TMsg = {
    title: string;
    msg: string;
}
export type TUseToast = {
    toastMsg: TMsg | undefined;
    setToastMsg: ( msg:TMsg | undefined) => void;
    active: boolean;
    setActive: (active: boolean) => void;
}
const useToast = (): TUseToast => {
    const [toastMsg, setToastMsg] = useState<TMsg | undefined>();
    const [active, setActive] = useState(false);
    useEffect(() => {
        console.warn('useToast', toastMsg);
        const toastElement = document.querySelector(`.${styles.toast}`);
        if (active) {
            toastElement?.classList.add(styles.active);
            setTimeout(() => {
                setActive(false);
            }, 3000);
        } else {
            toastElement?.classList.remove(styles.active);
        }
    }, [active]);
    return {active, setActive, toastMsg, setToastMsg};
};
export default useToast;