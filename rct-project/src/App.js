import './App.css';
import React from 'react';

import Header from './view/components/Header'
import Main from './view/posts/Main'
import Footer from './view/components/Footer'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => {
  return (
    <div>
      <h1>Всем привет! </h1>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;
