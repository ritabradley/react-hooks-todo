import React, { useState } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

function App() {
    const [todos, setTodos] = useState([
        { text: 'Learn about React Hooks' },
        { text: 'Take a nap' },
        { text: 'Build todo app' },
    ]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };
    return (
        <div className=' flex justify-center'>
            <div className='p-8 w-1/2'>
                {todos.map((todo, i) => (
                    <Todo key={i} index={i} todo={todo} />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
