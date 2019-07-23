import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {
//takes itemList key

    return(
        <div className = 'list-container'>
            
            <ul>
                {props.itemList.map(
                listValue => 
                
                //return single todo JSX elements within this List container
                <Todo key={listValue.id} singleDo = {listValue} markDone={props.markDone}/>
                    
                
            )}
        
            </ul>
            <div className = 'list-background'>
            </div>
        </div>
    );
}

export default TodoList;