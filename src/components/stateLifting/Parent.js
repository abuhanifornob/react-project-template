import React, { useState } from 'react';
import Child from './Child';

export default function Parent() {
    const [childData, setChildData] = useState('');
    const data = 'Im am Parent data Form Parent Componet';
    // const chaildDataHold = (data) => {
    //     setChildData(data);
    // };
    return (
        <div>
            <p>{childData}</p>
            <Child data={data} onChaildData={setChildData} />
        </div>
    );
}
