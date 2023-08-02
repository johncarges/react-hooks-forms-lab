import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}  onSearchChange={handleSearchChange} search={searchTerm}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            ? <Item key={item.id} name={item.name} category={item.category} />
            : null
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
