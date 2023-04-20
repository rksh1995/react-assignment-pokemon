import React from 'react'
import Todo from './Todo';

const todosList=[
    {
        id:1,
        name:"Rakesh",
        projectName:"Food-Application",
        task:"App is responsive in all devices",
        time:"4hours"
    },
    {
        id:1,
        name:"Rakesh",
        projectName:"Food-Application",
        task:"App is responsive in all devices",
        time:"4hours"
    }
];
const TodoList = () => {
  return (
    <>
      <center>
        <h1>Todo List</h1>
        {todosList.map((element)=>  <Todo  todoData={element}/>    )}
       
      </center>
    </>
  )
}

export default TodoList
