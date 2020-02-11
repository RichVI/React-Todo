import React from 'react';
import {TodoForm} from './components/TodoForm';
import {TodoList} from './components/TodoList';
import styled from 'styled-components';


const Wrapper = styled.div`
background-color: blue;
color: white
`


const taskList = [
  {
    task: "To-dos",
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state={
      taskList: taskList
    }
  }
  
  addNewTask = newTaskItem => {
    const newTask = {
      task: newTaskItem,
      id: Date.now(),
      completed: false
    };
    this.setState({
      taskList: [...this.state.taskList, newTask]
    })
  }

  deleteCompletedTask = () => {
    const newTaskList =this.state.taskList.filter(taskList => !taskList.completed)
    this.setState({
      taskList: newTaskList
    })
  }

  toggleTask = clickedId => {
    const newTaskList = this.state.taskList.map(task => {
      if (task.id === clickedId){
        return{
          ...task, completed: !task.completed
        }
      }
      else{
        return task;
      }
    })

    this.setState({
      taskList: newTaskList
    })
  }

  render(){
    return(
      <Wrapper>
        <h1>Task List</h1>
        <TodoList taskList={this.state.taskList} toggleTask={this.toggleTask}/>
        <TodoForm addNewTask={this.addNewTask} deleteCompletedTask={this.deleteCompletedTask}/>
      </Wrapper>
    );
  }
}

export default App;