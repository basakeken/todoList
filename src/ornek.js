import React, {useState} from 'react';

export default function Dene02() {
    const [text, setText] = useState('');
    
    const [todos, setTodos] = useState(['a', 'b', 'c']);

    function handleClick() {
        const newTodos = [...todos];
        newTodos.push(text);
        setTodos(newTodos);
        setText('');
    }

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
                <li>
                    {todo}
                </li>
            ))}
            </ul>
        </>
    );
}