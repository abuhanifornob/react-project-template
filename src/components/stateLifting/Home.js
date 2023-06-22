import React, { useState } from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';
import Students from './Students';
import NewStudent from './NewStudent';

export default function Home() {
    const summayTodo = ['todo1', 'todo2'];
    const dummyStudents = [
        {
            name: 'Abdullah',
            phone: '01756894235'
        },
        {
            name: 'Saifullah',
            phone: '01723568945'
        }
    ];
    const [students, setStudents] = useState(dummyStudents);
    const addNewStudent = (newStudent) => {
        setStudents([...students, newStudent]);
        console.log(newStudent);
    };
    const [todos, setTodos] = useState(summayTodo);

    const addNewTodod = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div>
            <NewTodo onAddNewTodod={addNewTodod}></NewTodo>
            <Todos todos={todos} />
            <NewStudent onAddNewStudent={addNewStudent}></NewStudent>
            <Students students={students}></Students>
        </div>
    );
}
