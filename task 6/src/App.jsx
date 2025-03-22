

import React, { useContext } from 'react';
import { Route, Routes,Router, Link, useParams, useNavigate } from 'react-router-dom';
import UserAuthContext from './UserAuthContext';
import AuthButton from './AuthButton';
import './App.css';


function Home() {
  const { isAuthenticated, toggleAuth } = useContext(UserAuthContext);
  return (
    <div>
      {isAuthenticated ? <p>Welcome back, user!</p>
      : 
        <p>Please log in to access your account.</p>
      }
    </div>
  );
}
function About() {
  return <p>This is the About page.</p>;
}

function App() {


  return (  <div>
    
    <h1>React Task</h1>
    <AuthButton />
    <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </nav>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>

  </div>);
}
export default App;
