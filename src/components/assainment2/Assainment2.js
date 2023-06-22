import React, { useState } from 'react';

export default function Assainment2() {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount((previousCount) => previousCount - 1);
    };
    const handleIncrement = () => {
        setCount((previousCount) => previousCount + 1);
    };
    const handleReset = () => {
        setCount((previousCount) => 0);
    };
    return (
        <div className="text-center bg-gray-700 text-white w-1/3 border-x-2 mt-10 ml-60 ">
            <h1>React Applicaton</h1>
            <div>
                <h3>Count : {count}</h3>
                <div className="">
                    <button onClick={handleIncrement} className="text-3xl text-white m-4  hover:bg-red-500" disabled={count === 5 ? true : false}>
                        +
                    </button>
                    <button onClick={handleDecrement} className="text-3xl text-white m-4 hover:bg-red-500" disabled={count === -5 ? true : false}>
                        -
                    </button>
                    <button onClick={handleReset} className="text-3xl text-white m-4 hover:bg-red-500">
                        0
                    </button>
                </div>
            </div>
        </div>
    );
}
