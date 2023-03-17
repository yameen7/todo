import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React ,{useState} from 'react';
import AddTodo from './Components/AddTodo';

function App() {

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo = (title,desc) =>{
    let no;
    if(todos.length===0)
    {
      no=1;
    }
    else
    {
      no = todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:no,
      title:title,
      desc:desc
    }
    if(setTodos([...todos,myTodo]))
    {
      alert('Added Sucesfuly');
    }
  }

  const [todos, setTodos]=useState([
    {
      sno:1,
      title:'Title 1',
      desc: 'Description 1'
    },
    {
      sno:2,
      title:'Title 2',
      desc: 'Description 2'
    },
    {
      sno:3,
      title:'Title 3',
      desc: 'Description 3'
    },
    {
      sno:4,
      title:'Title 4',
      desc: 'Description 4'
    },
    {
      sno:5,
      title:'Title 5',
      desc: 'Description 5'
    },
    {
      sno:6,
      title:'Title 6',
      desc: 'Description 6'
    },
    {
      sno:7,
      title:'Title 7',
      desc: 'Description 7'
    },
    {
      sno:8,
      title:'Title 8',
      desc: 'Description 8'
    },
    {
      sno:9,
      title:'Title 9',
      desc: 'Description 9'
    },
    {
      sno:10,
      title:'Title 10',
      desc: 'Description 10'
    }
  ]);
  return (
    <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
