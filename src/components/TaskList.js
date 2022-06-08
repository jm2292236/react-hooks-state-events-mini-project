import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList( { tasks, selectedCategory, onDeleteBtnClick }) {
    const tasksFiltered = tasks.filter((task) => {
        if (selectedCategory === "All") return true;

        return task.category === selectedCategory;
    });
    
    
    
    // Make a list of component calls to the Task component for each task
    const taskToDisplay = tasksFiltered.map(
        task => <Task key={uuid()} category={task.category} text={task.text} onDeleteBtnClick={handleDeleteBtnClick} />
    );



    function handleDeleteBtnClick (taskToDelete) {
        onDeleteBtnClick(taskToDelete);
    }



    return (
        <div className="tasks">
            {/* display a list of tasks using Task component (filtered by category)*/}
            {taskToDisplay}
        </div>
    );
}

export default TaskList;
