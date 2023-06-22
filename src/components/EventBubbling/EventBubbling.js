import React from 'react';

export default function EventBubbling() {
    const handleParent = (event) => {
        console.log('Parent Event: ', event);
    };
    const handleChild = (event) => {
        event.stopPropagation();
        console.log('event Chaild:', event);
    };
    return (
        <div onClick={handleParent} className="h-14 bg-orange-600">
            <h2>This is Bubbling Header</h2>
            <h3>Count: </h3>
            <button onClick={handleChild}>Increment</button>
        </div>
    );
}
