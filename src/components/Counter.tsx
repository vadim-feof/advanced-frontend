import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return (
        <div>
            <button onClick={increment}>{count}</button>
        </div>
    );
};
