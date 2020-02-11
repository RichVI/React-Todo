import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = ({
            newTask: ""
        })
    }
    
    handleChange = e => {
        this.setState({
            newTask: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        this.setState({newTask: ""});
    }

    clearCompleted = e => {
        e.preventDefault();
        this.props.deleteCompletedTask();
    }

    render(){
    return(
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="newTask" value={this.state.newTask} onChange={this.handleChange}/>
            <button>Add task</button>
            <button onClick={this.clearCompleted}>Remove Completed Task</button>
            
        </form>
    )
    }
}
export {TodoForm};