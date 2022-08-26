import {createContext, useContext} from "react";
import useToast, {TUseToast} from "../hooks/ToastHook";


const ToastContext = createContext({} as TUseToast);

export const ToastProvider = ({children}:any) => {
    const {active,setActive,toastMsg,setToastMsg} = useToast()
    return (
        <ToastContext.Provider value={{active,setActive,toastMsg,setToastMsg}}>
            {children}
        </ToastContext.Provider>
    );
};
export const useToastContext = () => {
    return useContext(ToastContext);
};
