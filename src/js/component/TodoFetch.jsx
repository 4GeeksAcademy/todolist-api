import React, { useState, useEffect } from "react";


export const TodoFetch = () => {

  const [newTask, setNewtask] = useState('');
  const [editTask, setEditTask] = useState('');
  const [isDone, setIsdone] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleSubmitAdd = (event) => {
    event.preventDefault();

  }

  const handleSubmitEdit = (event) => {
    event.preventDefault();

  }



  return (

    <div classNAmeName="container">
      <h1>Todo List with Fetch</h1>
      <form onSubmit={handleSubmitAdd}>
        Add Task
        <input> type="text onChange={event => setnewtask(event.target.value)} value={newtask} </input>
      </form>

      <form onSubmit={handleSubmitEdit} className="text-start">
        <div classNAme="mb-3">
          <label htmlFor="exampleInputEmail1" classNAme="form-label">Email address</label>
          <input type="email" classNAme="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          onChange={event => setEdittask(event.target.value)} value={editTask}/>
            <div id="emailHelp" classNAme="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div classNAme="mb-3 form-check">
          <input type="checkbox" classNAme="form-check-input" id="exampleCheck1"
          onChange={event => setIsdone(event.tareget.checked)} checked={isDone}/>
            <label classNAme="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" classNAme="btn btn-primary">Submit</button>
       </form>

       <ul className="list-">
       {todos.(map(iterator)=> <li className="list-group-item"</li>)}
        </ul>

    </div>



  );
};




