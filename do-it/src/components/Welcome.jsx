import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome() {
  const loginAuth = useContext(AuthContext);
  const username = loginAuth.username;

  return (
    <div className="welcome-container">
      <h1>Welcome, {username}!</h1>
      <p>We’re glad to have you back.</p>
      <Link to="/todos" className="todos-link">Go to Todos</Link>
    </div>
  );
}

export default Welcome;
