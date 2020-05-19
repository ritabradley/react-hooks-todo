import React, { useState } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

function App() {
    const [todos, setTodos] = useState([{ text: 'Learn about React Hooks', isCompleted: false }]);

    const addTodo = (text) => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };

    const completeTodo = (i) => {
        const newTodos = [...todos];
        newTodos[i].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (i) => {
        const newTodos = [...todos];
        newTodos.splice(i, 1);
        setTodos(newTodos);
    };
    return (
        <div className=' flex justify-center'>
            <div className='p-8 w-1/2'>
                {todos.map((todo, i) => (
                    <Todo key={i} index={i} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo} />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
}

export default App;
