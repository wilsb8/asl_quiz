// import declarations
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Login from './Components/Login'
import Quiz from './Components/Quiz'
import queryString from 'querystring';

const App = () => { 
  const [jwtx, setJwtx] = useState('') // making authentication and authorization happen with JSON Web Tokens
  useEffect(() => {
    async function fetchJwtx() { // get JSON web tokens
      const params = queryString.parse(window.location.search.replace(/^\?/, '')) // append ? to the end of the query in our address bar
      localStorage.token = params.token
      const response = await axios('http://localhost:4000/auth/token/', {
        headers: {
          token: localStorage.token
        }
      })
      setJwtx(response.data.token) // we have our token
    }
    fetchJwtx()
  }, []);
  
  if (jwtx === "undefined") { // if we don't get a token back
    return <Login />; // redirect to the Login page
  }
  // someone set us up the router
  return (
    <Router>
      <div className="App">
        <Navigation isLoggedIn={jwtx ? true : false} /> { /* are we logged in? */ }
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quizzes/:id' element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;