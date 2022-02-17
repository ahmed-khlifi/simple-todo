import React, {useEffect, useState} from 'react'
import TodoItem from '../components/TodoItem'

export default function Home() {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({
        completed: null,
        title: null,
        id: Math.random()*542545
    })


    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(todo => setTodos(todo))

    }, [])

    const todoHandler = (e) => {
        setTodos([...todos, todo])
        e.preventDefault()
    }



  return (
    <div className='home'>
        <div className='addtodo' onSubmit={todoHandler}>
        <form>
            <label>Completed</label>
            <input type="text" placeholder='add todo' onChange={(e) => setTodo({...todo,title: e.target.value})}/>
            <select onChange={(e) => setTodo({...todo,completed: e.target.value  == 'true'})}>
                <option>true</option>
                <option>false</option>
            </select>
            <button className='btn' >add to do</button>
        </form>
    </div>
    <div className='container'>
        <h1>My TO-DO</h1>
    
        
        <div className='todo-list'>
            {
                todos
                .sort((a,b) => a.completed - b.completed)
                .map(todo => <TodoItem todo={todo} key={todo.id}/>)
            }
            
        </div>
    </div>
    </div>
  )
}
