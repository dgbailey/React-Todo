import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
    //add strike classname if boolean true
    <li 
    className={
    props.singleDo.completed ?'strike' : props.singleDo.name} 
    onClick={()=>{props.markDone(props.singleDo.id)}}

    >{props.singleDo.task}</li>);
}

export default Todo;