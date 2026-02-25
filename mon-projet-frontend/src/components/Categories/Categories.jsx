import React from 'react'
import './Categories.css'

const Categories = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="categories" id="categories">
      <h2>choose a category</h2>
      <p> </p>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Sweater">Sweater</option>
        <option value="Trousers">Trousers</option>
        <option value="Shirt">Shirt</option>
        <option value="Coat">Coat</option>
        <option value="Jacket">Jacket</option>
      </select>
    </div>
  );
};

export default Categories
