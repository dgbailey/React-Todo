import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
//takes itemList key

    return(
        <div className = 'list-container'>
            <ul>
            {props.itemList.map(
                (listValue) => {
                    return(
                    //return single todo JSX elements within this List container
                    <Todo singleDo = {listValue} markDone={props.markDone}/>
                    );
                }
            )}
            </ul>
        </div>
    );
}

export default TodoList;