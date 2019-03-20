import React from 'react';

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
            <button className='clear'>Clear Completed</button>
        </div>
    );
}

export default TodoForm;