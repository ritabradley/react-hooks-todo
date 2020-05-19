import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Add todo item'
                    className='bg-red-100 p-2 rounded-md'
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    );
}

export default TodoForm;
