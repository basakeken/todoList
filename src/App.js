import './App.css';
//uhyyhhhgfhj

import React, { useEffect,useState} from 'react';

export default function Dene02() {

  const [text, setText] = useState('');
    
  const [todos, setTodos] = useState([]);

  const [isDone, setDone] = useState('no');

  useEffect(() => {
    console.log('todos', todos);
      }, [todos]);

  function handleClick() {
      const newTodos = [...todos];
      newTodos.push({id:todos.length+1,name:text,done:isDone});
      setTodos(newTodos);
      setText('');
  }

  function delTodo(id){
    const newTodos=todos.filter(val => val.id !== id);
    setTodos(newTodos);
  }

  const [style,setStyle]=useState('def');


  function doTask(id){
        for(const todo in todos){
          if (todo.id===id){
            setStyle('completed');
            setDone('yes');
          }
        }
    }

  function temizle(){
    const newTodos=todos.filter(val => val.done === 'yes');
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
            <li className={style} id={todo.id}>
                {todo.name}
                <br></br><button onClick={()=>doTask(todo.id)}>Yap</button> 
                <br></br><button onClick={()=>delTodo(todo.id)}>Sil</button>
            </li>
        ))}
        </ul>
    </>
)
      }
