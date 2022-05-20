import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkMode ? "App dark" : "App light"
  const dm = !darkMode ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>{dm}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
