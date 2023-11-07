import React, { useState } from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

    return (<>  
  <div className='todolist-container'>

    <h1>Todos</h1>
    <ul>
      <li><input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setList(list.concat(inputValue));
            setInputValue("");
          }
        }}
        placeholder="What do you need to do?"
      /></li>
       {list.map((l, index) => (
      <li>
        {l}{""} <button onClick={() => {
          setList( list.filter((a, currentIndex) => index !== currentIndex))
        }}><TiDeleteOutline/></button>
      </li>))}
      <li>{list.length} "item left"</li>
    </ul>
      
  </div>
    
    </>
  );
}

export default App;
