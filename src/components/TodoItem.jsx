import React, { useState } from "react";
import './todo.css';

const TodoItem = ({
    id,
    value,
    isDone,
    created,
    modified,
    deleteTodo,
    markDone,
    updateValue,
    editTodoId,
    setEditTodoId
}) => {
    const [newValue, setNewValue] = useState(value);
    const isEditMode = id === editTodoId;

    const handleComplete = () => {
        markDone(id);
    };

    const handleSave = () => {
        updateValue(id, newValue);
        setEditTodoId(null);
    };

    const handleCancel = () => {
        setNewValue(value);
        setEditTodoId(null);
    };

    return (
        <div key={id}>
            {!isEditMode ? (
                <li className={isDone ? "completed-task" : ""}>
                    <input type="checkbox" checked={isDone} onChange={handleComplete} />
                    <span>{value}</span>
                    &nbsp;<button onClick={() => setEditTodoId(id)}>Edit</button>
                    {isDone && (
                        <>
                            &nbsp;<button
                                onClick={() => {
                                    const confirmed = window.confirm(`Are you sure you want to delete this '${value}' TODO?`);
                                    if (confirmed) deleteTodo(id);
                                }}
                            >
                                Delete
                            </button>
                        </>
                    )}
                    &nbsp;
                    <span className="created-task">
                        {modified ? `Modified: ${new Date(modified).toLocaleString()}` : `Created: ${new Date(created).toLocaleString()}`}
                    </span>
                </li>
            ) : (
                <li>
                    <input
                        type="text"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                        placeholder='Edit TODO...'
                    />
                    &nbsp;<button onClick={handleSave}>Save</button>
                    &nbsp;<button onClick={handleCancel}>Cancel</button>
                    &nbsp;
                    <span className="created-task">
                        {modified ? `Modified: ${new Date(modified).toLocaleString()}` : `Created: ${new Date(created).toLocaleString()}`}
                    </span>
                </li>
            )}
        </div>
    );
};

export default TodoItem;
