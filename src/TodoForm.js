import React from 'react';
import './TodoForm.css'

const TodoForm = (props) => {
    return  (
        <div className='form-container'>
            <form id='todoform'>
                <input 
                placeholder = 'Enter todo here'
                // value = {props.task}
                onChange ={props.formChange}>
                </input>
            </form>
            <button className='submitBtn' onClick={props.formSubmit}>Add New</button>
            <button className='clear' onClick={props.clearComplete}>Clear Completed</button>
        </div>
    );//need to look up more on synthetic events here
}

export default TodoForm;