import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const addItem = () => {
    const newItem = {
      name: itemName,
      price: itemPrice
    };
    if (selectedItemIndex !== null) {
      const updatedItems = [...items];
      updatedItems[selectedItemIndex] = newItem;
      setItems(updatedItems);
      setSelectedItemIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setShowForm(false);
    setItemName('');
    setItemPrice('');
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    const selectedItem = items[index];
    setItemName(selectedItem.name);
    setItemPrice(selectedItem.price);
    setSelectedItemIndex(index);
    setShowForm(true);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => editItem(index)}>Edit</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setShowForm(true)}>Add Item</button>
      {showForm && (
        <AddItemForm
          itemName={itemName}
          itemPrice={itemPrice}
          setItemName={setItemName}
          setItemPrice={setItemPrice}
          addItem={addItem}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
