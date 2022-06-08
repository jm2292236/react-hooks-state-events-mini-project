import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    // Create the list of categories with buttons the user can click to select a category
    const categoriesList = categories.map((category, index) => {
        return (
                <button 
                    key={index}
                    className={selectedCategory === category ? "selected" : ""}
                    onClick={handleButtonClick}>
                        {category}
                </button>
        );
    });

    function handleButtonClick(event) {
        // Switch the selected category to the one of the button the user clicked
        onCategoryChange(event.target.textContent);
    }


    return (
        <div className="categories">
            <h5>Category filters</h5>
            {/* render <button> elements for each category here */}
            {categoriesList}
            {/* {
                categories.map((category, index) =>
                            <button 
                                key={index}
                                className={selectedCategory === category ? "selected" : ""}
                                onClick={handleButtonClick}>
                                    {category}
                            </button>
                )
            } */}
        </div>
    );
}

export default CategoryFilter;
