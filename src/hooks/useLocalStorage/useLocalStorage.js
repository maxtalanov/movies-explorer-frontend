import { useCallback, useEffect, useState } from "react";

const useLocalStorage = (key, initalValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initalValue
    })

    const setValue = useCallback((value) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key])

    return { storedValue, setValue };
}

export default useLocalStorage;