'use client'

import React from 'react'
import './styling/listTodo.css'
import { useSelector } from 'react-redux'


function ListTodo() {
    const todoData = useSelector((data)=>data.todo)
    console.log(todoData)
    const handleUpdate = (id) => {
        console.log(id);
      };
      const handleDelete = (id) => {
        console.log(id);
      };
  return (
    <div className='data-todo'>
      <h4>List of Todos</h4>
      <ol>
        {todoData.map((data) => (
          <li key={data.id}>
            {data.title}
            <button className="update-btn" onClick={() => handleUpdate(data.id)}>Update</button>
            <button className='delete-btn' onClick={() => handleDelete(data.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default ListTodo
