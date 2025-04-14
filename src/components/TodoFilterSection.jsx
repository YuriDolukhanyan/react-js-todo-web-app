import React, { useState } from "react";

const TodoFilterSection = ({ onFilterInputChange }) => {
    const [inputValue, setInputValue] = useState('');

    const filterHandle = (e) => {
        setInputValue(e.target.value);
        onFilterInputChange(e.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={filterHandle} placeholder='Filter by Keyword...' ></input>
        </div>
    );
};

export default TodoFilterSection;
