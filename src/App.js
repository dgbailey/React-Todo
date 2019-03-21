import React from 'react';
import TodoList from './TodoList';  
import TodoForm from './TodoForm';

class App extends React.Component {
  constructor(){
    super();

    //state storage
    this.state ={
      //mutable list of task objects
      masterList : 
        [{
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false,
          name:''
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false,
          name: ''
        }]
      ,
      task:'',
      id:'',
      completed:false,
      default:"Enter todo here",
      name:''
    } 
  }
  //method for form onchange event in JSX TodoForm
  handleChanges = (event) =>{
    
    this.setState(
      {task: event.target.value}
    )
  }
//method for on click event in JSX TodoForm
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


    //clear form after state change submission
    clearform();
   

  }

  crossOff = (id) =>{
    //add true to state completed on click
    //you need to modify state at central source not component
    
    const updatedList = this.state.masterList.map(
      (listItem) =>{
        
        if(id === listItem.id){
          listItem.completed = !listItem.completed;
        }
        else {}

        return listItem;
      }
    
    )
    
    this.setState({masterList:updatedList});
    
  }

  clearComplete = () =>{
    console.log('instantiating');
    //this notation avoids us having to explicitly bind this keyword further down the road
    //update state list onClick
    //using new copy of list that has been
    //filtered for items with complete:true
    const newlist = this.state.masterList.filter(
      currentItem => !currentItem.completed
    )

    this.setState({masterList:newlist});
  }
   //passing callbacks below so that form components can update state?
  render() {
    return (
      <div className='app-container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList itemList = {this.state.masterList} markDone={this.crossOff}/>
       
        <TodoForm formSubmit = {this.logFormEntry} formChange = {this.handleChanges} clearComplete ={this.clearComplete}/>
      </div>
    );
  }
}

export default App;
