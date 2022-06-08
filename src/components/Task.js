import React from "react";

function Task({ category, text, onDeleteBtnClick }) {
    function handleDeleteBtnClick () {
        onDeleteBtnClick(text);
    }



    return (
        <div className="task">
            <div className="label">{category}</div>
            <div className="text">{text}</div>
            <button className="delete" onClick={handleDeleteBtnClick}>X</button>
        </div>
    );
}

export default Task;
