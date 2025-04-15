import React, { useEffect, useState } from "react";
export const TodoListFetch = () => {
    const host = 'https://playground.4geeks.com/todo';
    const user = 'Annie';
    const [newTask, setNewTask] = useState("");
    const [editTask, setEditTask] = useState("");
    const [isDone, setIsDone] = useState(false);
    const [todos, setTodos] = useState([{
        label: "Buenas noches", is_done: false, id: 48
    }]);
    const [editingId, setEditingId] = useState(null);
    const getTodos = async () => {
    const uri = `${host}/users/${user}`;
    const options = {
            method: 'GET'
        }
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return;
        }
        const data = await response.json();
        setTodos(data.todos);
    }
    useEffect(() => {
        getTodos();
    }, []);
    const addTodos = async () => {
        const dataToSend = {
            label: newTask,
            is_done: false
        }
        const uri = `${host}/todos/${user}`;
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        }
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return;
        }
        getTodos();
    }
    const handleSubmitAdd = (event) => {
        event.preventDefault();
        addTodos();
        setNewTask('');
    }
    const handleSubmitEdit = async (event) => {
        event.preventDefault();
        const dataToSend = {
            label: editTask,
            is_done: isDone
        }
        const uri = `${host}/todos/${editingId}`;
        const options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        }
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return;
        }
        setEditingId(null);
        setEditTask('');
        setIsDone(false);
        getTodos();
    }
    const handleEditClick = (task) => {
        setEditingId(task.id);
        setEditTask(task.label);
        setIsDone(task.is_done);
    }
    const handleDeleteClick = async (id) => {
        const uri = `${host}/todos/${id}`;
        const options = {
            method: 'DELETE'
        }
        const response = await fetch(uri, options);
        if (!response.ok) {
            console.log('Error', response.status, response.statusText);
            return;
        }
        getTodos();
    }
    return (
        <div className="container">
            <h1>Todo List with Fetch</h1>
            {editingId === null ? (
                <form onSubmit={handleSubmitAdd} className="text-start" id="formAddTask">
                    <label className="form-label">Add task</label>
                    <input type="text" className="form-control" onChange={event => setNewTask(event.target.value)} value={newTask}></input>
                    <button type="submit" className="btn btn-primary">Add Task</button>
                </form>
            ) : (
                <form onSubmit={handleSubmitEdit} className="text-start" id="formEditTask">
                    <div className="mb-3">
                        <label className="form-label">Edit task</label>
                        <input type="text" className="form-control" onChange={event => setEditTask(event.target.value)} value={editTask} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" onChange={event => setIsDone(event.target.checked)} checked={isDone} />
                        <label className="form-check-label">Completed</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditingId(null)}>Cancel</button>
                </form>
            )}
            <ul className="list-group">
                {todos.map((task) => (
                    <li key={task.id} className="list-group-item d-flex hidden-icon" id="iconos">
                        {task.label}
                            <span onClick={() => handleEditClick(task)} id="i1">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </span>
                            <span onClick={() => handleDeleteClick(task.id)} id="i2">
                                <i className="fa fa-trash text-danger"></i>
                            </span>
                    </li>
                ))}
                 <li id="Tareagris">
                    {todos.length} tareas
                </li>
            </ul>
        </div>
    )
}