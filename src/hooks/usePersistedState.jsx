import { useEffect, useState } from 'react';

const usePersistedState = (key, defaultValue) => {

    const [state, setState] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) || defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;