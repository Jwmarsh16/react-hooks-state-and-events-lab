import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setInCart] = useState(false);
  

function handleClick() {
  setInCart((addItem) => !addItem);
}

const itemClass = addItem ? "in-cart" : "";
const buttonText = addItem ? "Remove From Cart" : "Add to Cart";

  
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
