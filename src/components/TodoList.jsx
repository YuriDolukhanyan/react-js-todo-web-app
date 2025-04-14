import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './todo.css';

const TodoList = ({ todos, deleteTodo, markDone, updateValue, editTodoId, setEditTodoId }) => {
    const [filter, setFilter] = useState('all');

    if (!todos.length) {
        return <div>There are no TODO-s! Loading...</div>;
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.isDone;
        if (filter === 'notCompleted') return !todo.isDone;
        return true;
    });

    return (
        <div>
            <div className="tabs">
                <button
                    className={filter === 'all' ? 'active-tab' : ''}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
                <button
                    className={filter === 'completed' ? 'active-tab' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
                <button
                    className={filter === 'notCompleted' ? 'active-tab' : ''}
                    onClick={() => setFilter('notCompleted')}
                >
                    Not Completed
                </button>
            </div>

            {filteredTodos.map(item => (
                <TodoItem
                    key={item.id}
                    {...item}
                    deleteTodo={deleteTodo}
                    markDone={markDone}
                    updateValue={updateValue}
                    editTodoId={editTodoId}
                    setEditTodoId={setEditTodoId}
                />
            ))}
        </div>
    );
};

export default TodoList;
