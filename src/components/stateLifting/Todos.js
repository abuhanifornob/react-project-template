import React from 'react';
import Todo from './Todo';

export default function Todos({ todos }) {
    console.log(todos);
    return (
        <div>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo}></Todo>
            ))}
        </div>
    );
}
