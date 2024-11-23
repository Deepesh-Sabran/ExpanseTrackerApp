import React from "react";

const FilterExpenses = ({ setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter((prev) => ({ ...prev, category: e.target.value }));
  };

  return (
    <div className="filter-container">
      <label>Filter by Category:</label>
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
};

export default FilterExpenses;
