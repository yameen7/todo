import React from 'react'
import Items from './Items'
export default function Todos(props) {
  return (
    <div className='container'>
        <h3 className='text-center my-5'>Todos List</h3>
        <div className='row'>
            {props.todos.length===0?"No Todos to Display":
            props.todos.map((todo)=>{
                return <Items todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}
        </div>
    </div>
  )
}
