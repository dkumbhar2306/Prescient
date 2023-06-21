import React from 'react';

const AddItemForm = ({ itemName, itemPrice, setItemName, setItemPrice, addItem }) => {
  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Name:
          <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
        </label>
        <label>
          Price:
          <input type="text" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
        </label>
        <button onClick={addItem}>Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
