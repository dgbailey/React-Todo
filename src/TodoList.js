import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
//takes itemList key

    return(
        <div className = 'list-container'>
            {props.itemList.map(
                (listValue) => {
                    return(
                    //return single todo JSX elements within this List container
                    <Todo singleDo = {listValue}/>
                    );
                }
            )}
        </div>
    );
}

export default TodoList;