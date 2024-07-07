import React, { useEffect, useState, useContext } from 'react';
import { Apitodo, deleteTodo } from '../todoapi/Apitodo';
import { AuthContext } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import './Todo.css';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const loginAuth = useContext(AuthContext);
  const navigate = useNavigate();
  const user = loginAuth.username;

  useEffect(() => {
    refreshTodos();
  }, []);

  function refreshTodos() {
    Apitodo(user)
      .then(response => setTodos(response.data))
      .catch(error => console.log(error));
  }

  function delTodo(id) {
    deleteTodo(user, id)
      .then(() => {
        refreshTodos();
        setMessage(`Delete of todo with id = ${id} successful`);
      })
      .catch(error => console.log(error));
  }

  function updateTodo(id) {
    navigate(`/todo/${id}`);
  }

  function addNewTodo() {
    navigate('/add');
  }

  return (
    <div className='container1'>
      <h1>Your Todos</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Done</th>
            <th>DELETE</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.username}</td>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>{todo.done.toString()}</td>
              <td>
                <button className="btn btn-danger" onClick={() => delTodo(todo.id)}>Delete</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btn btn-success add-todo" onClick={addNewTodo}>Add New Todo</div>
    </div>
  );
}

export default Todos;
