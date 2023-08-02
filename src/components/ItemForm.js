import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "Produce"
  })
  
  function handleChange(event) {
    const name = event.target.name
    let value = event.target.value

    setFormData({
      ...formData,
      [name]: value
    })
    console.log(`${name}: ${value}`)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    const newItem = {
      id: uuid(), 
      ...formData
    };

    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onChange={handleChange} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
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
