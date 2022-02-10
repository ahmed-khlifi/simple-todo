import * as React from 'react';



export default function TodoItem({todo}) {

    const completeHandler = () => {
        todo.title = "newwww"
    }

  return (
    <div className='todo-item'>
        {
        todo.completed ?
            <del><p>{todo.title}</p></del> : 
            <p>{todo.title}</p>
        }
        <button className='btn'
            onClick={completeHandler}
        >
            {!todo.completed ?
            "Mark as Completed": "Completed"}
        
        </button>
       
    </div>
    
  )
}
