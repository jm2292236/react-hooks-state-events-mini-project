import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.table({ CATEGORIES, TASKS });

function App() {
    // Manage the selected category selected by the user with the upper buttons
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [tasks, setTasks] = useState(TASKS);

    const tasksFiltered = tasks.filter((task) => {
        if (selectedCategory === "All") return true;

        return task.category === selectedCategory;
    });
    
    
    
    function handleCategoryChange(category) {
        // Switch the selected category to the one of the button the user clicked
        setSelectedCategory(category);
    }


    function handleTaskFormSubmit(newTask) {
        // Add the new task with the object comming from NewTaskForm component
        setTasks([...tasks, newTask])
    }


    function handleDeleteBtnClick(taskToDelete) {
        setTasks(tasks.filter(task => task.text === taskToDelete ? false : true));
    }

    return (
        <div className="App">
            <h2>My tasks</h2>

            <CategoryFilter 
                categories={CATEGORIES} 
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange} />

            <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />

            {/* <TaskList tasks={tasks} selectedCategory={selectedCategory} onDeleteBtnClick={handleDeleteBtnClick} /> */}
            <TaskList tasks={tasksFiltered} onDeleteBtnClick={handleDeleteBtnClick} />
        </div>
    );
}

export default App;
