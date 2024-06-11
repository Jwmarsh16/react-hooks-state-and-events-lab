import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, updateCategory] = useState("All");


const itemsToDisplay = items.filter((itemType) => {
  if (selectedCategory === "All") {
    return true;
  } else {
    return itemType.category === selectedCategory;
  }
  });

function handleUpdate(event) {
 updateCategory(event.target.value);
}

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleUpdate}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
