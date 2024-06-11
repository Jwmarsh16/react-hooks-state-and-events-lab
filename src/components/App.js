import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [lightMode, setLight] = useState(false);
  
  function handleToggle() {
    setLight((lightMode) => !lightMode);
  }


  
  const appClass = lightMode ? "App dark" : "App light"
const buttonText = lightMode ? "Switch to Light Mode" : "Switch to Dark Mode"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
