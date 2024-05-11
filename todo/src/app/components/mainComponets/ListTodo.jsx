'use client'

import React, { useState } from 'react'
import './styling/listTodo.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo,updateTodo } from '@/app/redux/slice'


function ListTodo() {
    const todoData = useSelector((data)=>data.todo)
    const [updatetodo, setupdatetodo] = useState({});
    const dispatch = useDispatch()
    console.log(todoData)
    const handleUpdate = (id) => {
        console.log(id);
        dispatch(updateTodo({ id, newText: updatetodo[id] || ''  }))
      };
    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteTodo(id))
      };
    const handleChange = (id, text) => {
    setupdatetodo({
        ...updatetodo,
        [id]: text
    });
    };
  return (
    <div className='data-todo'>
      <h4>List of Todos</h4>
      <div className="todos">
      {todoData.map((data, index) => (
            <div className="todo-card" key={data.id}>
                <h3>{index + 1}. {data.title}</h3>
                <textarea
                    onChange={(e) => handleChange(data.id, e.target.value)}
                    value={updatetodo[data.id] || data.text}
                />
                <button className='delete-btn' onClick={() => handleDelete(data.id)}>Delete</button>
                <button className="update-btn" onClick={() => handleUpdate(data.id)}>Update</button>
            </div>
        ))}
    </div>
    </div>
  )
}

export default ListTodo
