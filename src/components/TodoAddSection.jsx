import React, { useState } from "react";

const TodoAddSection = ({ onAddTodoButtonClick }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const addHandle = () => {
        onAddTodoButtonClick(inputValue);
        setInputValue('');
    };

    return (
        <div>
            <input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') addHandle();
                }}
                type='text'
                placeholder='Enter TODO...'
            />
            &nbsp;<button disabled={!inputValue.trim().length} onClick={addHandle}>Add</button>
            <br />
            <br />
        </div>
    );
};

export default TodoAddSection;
