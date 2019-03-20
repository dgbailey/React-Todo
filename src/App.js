import React from 'react';
import TodoList from './TodoList';  
import TodoForm from './TodoForm';

class App extends React.Component {
  constructor(){
    super();

    //state storage
    this.state ={
      
      masterList : 
        [{
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }]
      ,
      task:'',
      id:'',
      completed:false,
      default:"Enter todo here"
      
    } 
  }

  handleChanges = (event) =>{
    console.log(event.target.value);
    this.setState(
      {task: event.target.value}
    )
  }

  logFormEntry = (event) =>{
    event.preventDefault();
    //create new form template
    const newForm = {
      task:this.state.task,
      id:Math.random(),
      completed:this.state.completed
    }
    //log entry text fill new form template and update state
    this.setState(
      
      
      {masterList:[...this.state.masterList,newForm]}  
    )
    
    function clearform(){
      document.getElementById('todoform').reset()
    }


    
    clearform();
   

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='app-container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList itemList = {this.state.masterList}/>
        <TodoForm formSubmit = {this.logFormEntry} formChange = {this.handleChanges}/>
      </div>
    );
  }
}

export default App;
