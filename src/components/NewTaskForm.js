import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewTaskForm({ categories, onTaskFormSubmit }) {
    const [taskName, setTaskName] = useState("");
    const [category, setCategory] = useState(categories[1]); // Select the first category after "All"
    const categoriesFiltered = categories.filter(category => category !== "All" ? true : false);
    const categoriesToDisplay = categoriesFiltered.map(category => <option key={uuid()} value={category}>{category}</option>)

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }



    function handleCategoryChange(event) {
        setCategory(event.target.value);
    }



    function handleFormSubmit(event) {
        event.preventDefault();

        onTaskFormSubmit({"key": uuid(), "text": taskName, "category": category})
    }



    return (
        <form className="new-task-form" onSubmit={handleFormSubmit}>
            <label>
                Details
                <input type="text" name={taskName} onChange={handleTaskNameChange} />
            </label>
            <label>
                Category
                <select name="category" onChange={handleCategoryChange}>
                    {/* render <option> elements for each category here */}
                    {categoriesToDisplay}
                </select>
            </label>
            <input type="submit" value="Add task" />
        </form>
    );
}

export default NewTaskForm;
