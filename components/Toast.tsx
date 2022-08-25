import {VscChromeClose} from "react-icons/vsc";
import styles from "../styles/Toast.module.scss";
import {useToastContext} from "../contexts/ToastProvider";

const Toast = () => {
    const {toastMsg, setActive} = useToastContext();
    return (
        <>
            {toastMsg &&
                <div className={styles.toast}>
                    <div className={styles.toastContent}>
                        <div className={styles.toastHeader}>
                            <h4>{toastMsg?.title}</h4>
                            <div className={styles.toastMsgClose}>
                                <button onClick={() => setActive(false)}>
                                    <VscChromeClose className={styles.toastMsgCloseIcon}/>
                                </button>
                            </div>
                        </div>
                        <div className={styles.toastMsg}>
                            <p>
                                {toastMsg?.msg}
                            </p>
                        </div>
                    </div>
                </div>
            }
            </>
    );
};

export default Toast;