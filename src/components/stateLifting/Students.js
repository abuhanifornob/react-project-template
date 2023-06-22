import React from 'react';
import Student from './Student';

export default function Students({ students }) {
    console.log(students);
    return (
        <div>
            {students.map((student, index) => (
                <Student key={index} student={student} />
            ))}
        </div>
    );
}
