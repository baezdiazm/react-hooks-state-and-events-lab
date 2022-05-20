import React, {useState} from "react";
import items from "../data/items";

function Item({ name, category }) {

  const [itemState, setItemState] = useState("")

  function handleAddToCart() {
    if(itemState === "") {
      setItemState((itemState) => "in-cart")
    }
  }
  return (
    <li className={itemState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
