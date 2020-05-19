import React from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
    <div
        className={
            todo.isCompleted
                ? 'py-4 px-6 my-4 shadow-md border-b-2 border-r-2 rounded-md bg-red-100 flex justify-between line-through'
                : 'py-4 px-6 my-4 shadow-md border-b-2 border-r-2 rounded-md bg-red-100 flex justify-between'
        }
    >
        {todo.text}
        <div>
            <button
                className='rounded-md py-2 px-3 mx-2 bg-green-600 text-green-100 hover:bg-green-800'
                onClick={() => completeTodo(index)}
            >
                Complete
            </button>
            <button
                className='rounded-md py-2 px-3 mx-2 bg-red-600 text-red-100 hover:bg-red-800'
                onClick={() => removeTodo(index)}
            >
                Delete
            </button>
        </div>
    </div>
);

export default Todo;
