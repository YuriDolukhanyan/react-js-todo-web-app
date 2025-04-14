import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoAddSection from "./TodoAddSection";
import TodoSaveSection from "./TodoSaveSection";
import TodoCountSection from "./TodoCountSection";
import TodoFilterSection from "./TodoFilterSection";
import { StorageService } from "../services/StorageService";
import { TODO_LIST_STORAGE_KEY } from "../constants/storageKeys";

const generateId = () => Math.random() * Date.now();

const getInitialState = () => {
    return StorageService.getItem(TODO_LIST_STORAGE_KEY) ?? [];
};

export const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [tempTodos, setTempTodos] = useState([]);
    const [editTodoId, setEditTodoId] = useState(null);
    const [filterQuery, setFilterQuery] = useState('');

    useEffect(() => {
        const data = getInitialState();
        setTodos(data);
        setTempTodos(data);
    }, []);

    const addTodo = (title) => {
        if (title) {
            let todo = {
                id: generateId(),
                value: title,
                isDone: false,
                created: Date.now(),
                modified: null
            };
            setTodos([...todos, todo]);
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const markDone = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    const updateValue = (id, newValue) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, value: newValue, modified: Date.now() } : todo
        ));
    };

    const saveLocal = () => {
        StorageService.setItem(TODO_LIST_STORAGE_KEY, todos);
        console.log('All TODO-s were Locally Saved!');
    };

    useEffect(() => {
        if (!filterQuery.trim()) {
            setTempTodos(todos);
            return;
        }
    
        const debounce = setTimeout(() => {
            const filtered = todos.filter(item =>
                item.value.toLowerCase().includes(filterQuery.toLowerCase())
            );
            setTempTodos(filtered);
        }, 300);
    
        return () => clearTimeout(debounce);
    }, [filterQuery, todos]);

    const filterTodo = (query) => {
        setFilterQuery(query);
    };

    return (
        <div className="todos">
            <TodoCountSection
                totalCount={tempTodos.length}
                completedCount={
                    tempTodos.reduce((cur, item) => {
                        return cur + item.isDone;
                    }, 0)
                }
            />
            <TodoSaveSection isClickable={todos.length} onSaveToLocalStorageButtonClick={saveLocal} />
            <br />
            <TodoAddSection onAddTodoButtonClick={addTodo} />
            <TodoList todos={tempTodos} deleteTodo={deleteTodo} markDone={markDone} updateValue={updateValue} editTodoId={editTodoId} setEditTodoId={setEditTodoId} />
            <br />
            <TodoFilterSection onFilterInputChange={filterTodo} />
        </div>
    );
};
