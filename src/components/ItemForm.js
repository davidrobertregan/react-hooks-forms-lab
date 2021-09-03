import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  
  const [newName, setNewName] = useState("")
  const [newCat, setNewCat] = useState("Produce")

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
    id: uuid(),
    name: newName,
    category: newCat
    };
    onItemFormSubmit(newItem);
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newName} onChange={e => setNewName(e.target.value)}/>
      </label>

      <label>
        Category:
        <select name="category" value={newCat} onChange={e => setNewCat(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
