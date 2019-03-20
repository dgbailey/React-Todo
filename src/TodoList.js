import React from 'react';

const Todolist = (props) =>{

    return(
        <div className = 'list-container'>
            {props.itemList.map(
                (listValue) => {
                    <Todo/>
                }
            )}
        </div>
    )
}