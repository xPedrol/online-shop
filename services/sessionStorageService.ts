export const addFrSession = (key: string, value: any) => {
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value);
};
export const getFrSession = (key: string) => {
    return sessionStorage.getItem(key);
};
export const removeFrSession = (key: string) => {
    sessionStorage.removeItem(key);
};