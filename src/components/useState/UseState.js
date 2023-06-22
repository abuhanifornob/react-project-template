import React, { useState } from 'react';

export default function UseState() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((previus) => previus + 1);
        setCount((previus) => previus + 1);
        setCount((previus) => previus + 1);
    };
    return (
        <div>
            <h1>Count :{count} </h1>
            <button onClick={handleIncrement}>Icrement</button>
        </div>
    );
}
