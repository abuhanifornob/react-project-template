import React from 'react';

export default function Student({ student }) {
    return (
        <div>
            <div>
                <p>Name: {student.name}</p>
                <p>Phone: {student.phone}</p>
            </div>
        </div>
    );
}
