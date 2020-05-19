import React from 'react';

const Todo = ({ todo }) => (
    <div className='py-4 px-6 my-4 shadow-md border-b-2 border-r-2 rounded-md bg-red-100'>{todo.text}</div>
);

export default Todo;
