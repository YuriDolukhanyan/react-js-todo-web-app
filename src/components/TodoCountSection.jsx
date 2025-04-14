import React from "react";

const TodoCountSection = ({ totalCount, completedCount }) => {
    return (
        <div>
            <h2>{completedCount} out of {totalCount} tasks completed!</h2>
        </div>
    );
};

export default TodoCountSection;
