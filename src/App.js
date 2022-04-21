import './App.css';
//uhyyhhhgfhj

import React, { useEffect,useState} from 'react';

export default function Dene02() {

  const [text, setText] = useState('');
  
  const [todos, setTodos] = useState(()=>{const localTodos = localStorage.getItem('todos'); return localTodos ? JSON.parse(localTodos) : [] });

  const [taskId, setId] = useState(todos.length+1);

  useEffect(()=> {
    localStorage.setItem('todos',JSON.stringify(todos))}, [todos]);

  useEffect(() => {
    console.log('todos', todos);
      }, [todos]);
  
  
  function handleClick() {
      const newTodos = [...todos];
      newTodos.push({id:taskId,name:text,done:false});
      setTodos(newTodos);
      setText('');
      setId(taskId+1);
  }

  function delTodo(id){
    const newTodos=todos.filter(val => val.id !== id);
    setTodos(newTodos);
  }

    
  function doTask(id){
    const newTodos = [];
    todos.map(todo => todo.id===id ? newTodos.push({...todo, done: true}) : newTodos.push(todo) );
    setTodos(newTodos);
  }

  function temizle(){
    const newTodos=todos.filter(val => val.done !== true);
    setTodos(newTodos);
  }
  

  return(
    <>
        <h3>todo list 🤯</h3>
        <input value={text} onChange={e => setText(e.target.value) } />
        <br />
        <button onClick={handleClick} disabled={!text}>
            Ekle
        </button>
        <button onClick={temizle}>
          Temizle
        </button>
        <ul>
        {todos.map(todo => (
            <li className={todo.done ? 'done' : ''} id={todo.id}>
                {todo.name}
                <br></br><button onClick={()=>doTask(todo.id)}>Yap</button> 
                <br></br><button onClick={()=> {
                  const onay = window.confirm('Silmek istediginize emin misiniz?')
                  if (onay){delTodo(todo.id)}
                }}>Sil</button>
            </li>
        ))}
        </ul>
    </>
)
      }
