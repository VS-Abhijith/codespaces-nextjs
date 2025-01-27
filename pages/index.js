/* Create a to do list in next.js

- add items to do the List
- delete items from the list 
*/

import React, { useState } from 'react';
import Head from 'next/head';
import link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  // Create state for  to do list with default items like: learn node.js, learn react.js, learn copilot
  const [todoList, setTodoList] = useState([
    { id: uuidv4(), item: 'learn node.js' },
    { id: uuidv4(), item: 'learn react.js' },
    { id: uuidv4(), item: 'learn copilot' },
  ]);
  // Create state for to do items
  const [todoItem, setTodoItem] = useState('');

  // Function that handles adding new items to the list
  const addTodoItem = () => {
    if (todoItem) {
      setTodoList([...todoList, { id: uuidv4(), item: todoItem }]);
      setTodoItem('');
    }
  };

  // Function that handles deleting items from the list
  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  // Render the input field and button to add items and list of all items
  return (
    <div>
      <Head>
        <title>To Do List</title>
      </Head>
      <h1>To Do List</h1>
      <input
        type='text'
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={addTodoItem}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.item}{' '}
            <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
  
}