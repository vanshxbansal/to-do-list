import React, { useState } from "react";
const App=()=>{
  const state=useState();
  const[name,setname]=useState("");
  const[list,setlist]=useState([]);
  const inputevent=(event)=>{
    setname(event.target.value);
  }
  const deltodolist = (index) => {
    console.log(index);
  var newlist=list;
  newlist.splice(index,1);
  setlist([...newlist]);
  }
  const todolist=()=>{
    setlist((prev)=>{
      return[...prev,name];
    });
    setname("");
  }
  const handleKeypress = (event) =>{
    console.log(event.which);
    if (event.which === 13) {
      todolist();
    }
  }
  return(<><div className="main">
    <div className="center"><h1>To Do List</h1><div className="set">
    <input onChange={inputevent} type="text" placeholder="Type Here" value={name} onKeyPress={handleKeypress} style={{width: "200px" }}/><button onClick={todolist} className="add">+</button></div>
    <ol>
    {list.map((itemvlaue,index)=>{
      return (<>
      <li><button onClick={()=>deltodolist(index)}className="del">x</button>{itemvlaue}</li></>);
    })}
    </ol>
      </div></div></>);
}
export default App;