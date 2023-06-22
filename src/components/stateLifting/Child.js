import React from 'react';

export default function Child(props) {
    const { data, onChaildData } = props;
    const childData = 'I am Chaild Data Form Child Component';
    onChaildData(childData);
    return (
        <div>
            <p>{data}</p>
        </div>
    );
}
