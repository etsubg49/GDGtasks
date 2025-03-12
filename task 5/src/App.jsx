import { Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import React from 'react';
import './App.css';  // Import CSS file for styling

function Home() {
  return <p>Welcome to the Home page!</p>;
}

function About() {
  return <p>This is the About page.</p>;
}

function Contact() {
  return <p>Contact us at: contact@example.com</p>;
}

function User() {
  let { id } = useParams();
  return <p>User ID: {id}</p>;
}

function Profile() {
  return <p>This is the Profile page.</p>;
}

function NotFound() {
  return <h1>Oops! Page not found.</h1>;
}

function Settings() {
  return <p>This is the Settings page.</p>;
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <nav className="sub-nav">
        <Link to="profile"> Profile </Link>
        <Link to="settings"> Settings </Link>
      </nav>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/dashboard')}>
      Go to Dashboard
    </button>
  );
}

function App() {
  return (
    <div className="app">
      <h1>React Task</h1>
      <nav className="main-nav">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/user/1"> User 1 </Link>
        <Link to="/user/2"> User 2 </Link>
        <Link to="/login"> Login </Link>
      </nav>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



