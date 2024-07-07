import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import './login.css';

function Login() {
    const [username, setUsername] = useState("pranav");
    const [password, setPassword] = useState("pranav");
    const [msg, setMsg] = useState(null);

    const navigate = useNavigate();
    const loginAuth = useContext(AuthContext);

    function handleLogin() {
        if (username === "pranav" && password === "pranav") {
            setMsg("success");
            loginAuth.setisAuth(true);
            loginAuth.setUsername(username);
            navigate(`/welcome`);
        } else {
            setMsg("invalid");
            loginAuth.setisAuth(false);
            loginAuth.setUsername(null);
        }
    }

    function ShowMessage() {
        if (msg === "success") {
            return <div className="success-message">Login successful!</div>;
        }
        if (msg === "invalid") {
            return <div className="error-message">Invalid credentials</div>;
        }
        return null;
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="login-form">
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value);
                            setMsg(null);
                        }}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <button onClick={handleLogin}>Login</button>
                <ShowMessage />
            </div>
        </div>
    );
}

export default Login;

