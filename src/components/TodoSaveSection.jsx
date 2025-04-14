import React from "react";

const TodoSaveSection = ({ isClickable, onSaveToLocalStorageButtonClick }) => {
    return (
        <div>
            <button disabled={!isClickable} onClick={onSaveToLocalStorageButtonClick} >
                {isClickable ? 'Save Everything to Local Storage' : 'Nothing to Save to Local Storage'}
            </button>
        </div>
    );
};

export default TodoSaveSection;
