import React from 'react';

const Todo = ({ todo, index, completeTodo }) => (
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
                className='rounded-md py-2 px-3 bg-green-600 text-green-100 hover:bg-green-800'
                onClick={() => completeTodo(index)}
            >
                Complete
            </button>
        </div>
    </div>
);

export default Todo;
