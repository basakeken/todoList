import './App.css';
//uhyyhhhgfhj

import React, {useEffect, useState} from 'react';

export default function Dene02() {

  const [text, setText] = useState('');
    
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('todos', todos);
      }, [todos]);

  function handleClick() {
      const newTodos = [...todos];
      newTodos.push({id:todos.length+1,name:text});
      setTodos(newTodos);
      setText('');
  }

  function delTodo(id){
    const newTodos=todos.filter(val => val.id !== id);
    setTodos(newTodos);
  }

  const [style, setStyle]= useState('def');


  return (
    <>
        <input value={text} onChange={e => setText(e.target.value) } />
        <br />
        <button onClick={handleClick} disabled={!text}>
            Ekle
        </button>
        <br />
        <ul>
        {todos.map(todo => (
            <li className={style} id={todo.id}>
                {todo.name}
                <button onClick={()=>setStyle('done')}>Yapildi</button>
                <button onClick={()=>delTodo(todo.id)}>Sil</button>
            </li>
        ))}
        </ul>
    </>
);
}
