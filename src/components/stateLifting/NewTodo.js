import React, { useState } from 'react';

export default function NewTodo({ onAddNewTodod }) {
    const [newTodo, setNewTodo] = useState('');
    const onchangeTodoHandle = (event) => {
        setNewTodo(event.target.value);
    };
    const handleTodo = (e) => {
        e.preventDefault();
        onAddNewTodod(newTodo);
    };

    return (
        <div>
            <form onSubmit={handleTodo}>
                <label htmlFor="todo">New Todo : </label>
                <input type="text" id="todo" name="todo" value={newTodo} onChange={onchangeTodoHandle}></input>
                <button>Add Todo</button>
            </form>
        </div>
    );
}
