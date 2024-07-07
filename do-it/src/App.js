import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Todos from './components/Todos';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthContext } from './context/auth';
import { useContext } from 'react';
import Updatetodo from './components/Updatetodo';
import Addtodo from './components/Addtodo';

function App() {
  const loginAuth = useContext(AuthContext);

  function NotAllowed({ children }) {
    if (loginAuth.isAuth) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<NotAllowed><Welcome /></NotAllowed>} />
            <Route path="/todos" element={<NotAllowed><Todos /></NotAllowed>} />
            <Route path="/todo/:id" element={<NotAllowed><Updatetodo /></NotAllowed>} />
            <Route path="/add" element={<NotAllowed><Addtodo /></NotAllowed>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
