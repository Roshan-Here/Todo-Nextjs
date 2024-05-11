'use client'

import React, { useState } from 'react'
import './styling/addTodo.css'
import { useDispatch } from 'react-redux';
import { addTodo } from '@/app/redux/slice';

function AddTodo() {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({ title: '', text: '' }); 

    console.log(formData)
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.title.trim() || !formData.text.trim()) {
            return;
        }

        dispatch(addTodo(formData));

        setFormData({ title: '', text: '' });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
  return (
    <div className='add-new-todo'>
        <form onSubmit={handleSubmit}>
            <h3>Add New Todo</h3>
            <input 
                type="text"
                name="title" 
                value={formData.title}
                placeholder='Title for Todo'
                onChange={handleChange}
                />
            <textarea  
                name="text" 
                value={formData.text} 
                placeholder='Add new Todo'
                onChange={handleChange}
             ></textarea >
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTodo
