import { useState } from 'react';

export const ButtonState: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    debugger;
    return (
        <>
            <button
                onClick={() => {
                    setCount(count + 1);
                    setCount(count + 1);
                    setCount(count + 1);
                }}
            >
                Add count
            </button>
            <h2>{count}</h2>
        </>
    );
};
