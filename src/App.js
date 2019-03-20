import React from 'react';
import TodoList from './TodoList';  

class App extends React.Component {
  constructor(){
    super();

    //state storage
    this.state ={
      
      masterList : [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }
      ]
    } 
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='app-container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList itemList = {this.state.masterList}/>
      </div>
    );
  }
}

export default App;
