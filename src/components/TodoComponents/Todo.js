import React from 'react';
import './Todo.css'

const Todo = props => {
    console.log(props)
    return(
        <div onClick={()=>props.toggleTask(props.task.id)}
        className={`task${props.task.completed ? 'completed' : ''}`}>
            <p>{props.task.task}</p>
        </div>
    )
}

export {Todo};