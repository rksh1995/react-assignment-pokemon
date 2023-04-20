import React from 'react'


const Todo = (props) => {
    
  return (
    <div className='todoTask'>
      <h2>Id: {props.todoData.id}</h2>
      <h2>Project name : {props.todoData.projectName}</h2>
      <h2>Poject Details : {props.todoData.task}</h2>
      <h2>Duration : {props.todoData.time}</h2>
   
    </div>
  )
}

export default Todo
