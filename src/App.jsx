import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Simple React Project</h1>
      <input
        type="text"
        placeholder="Enter an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span className="delete-icon" onClick={() => deleteItem(index)}>
              &#x2716;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
