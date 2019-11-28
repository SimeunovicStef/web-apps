import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './utilities/Main'
// import Home from './Home'
import Header from '../src/utilities/Header'
// import User from './usersFolder/User'
// import UserPage from './usersFolder/UserPage'
import Footer from '../src/utilities/Footer'


function App() {
  return (

    <div>
      <Header title="header" />
      <Main />
      <Footer title="footer" />
    </div>
  )
}

export default App;
