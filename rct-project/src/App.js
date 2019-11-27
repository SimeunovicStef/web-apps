import React from 'react';

import Header from './view/components/Header'
import Main from './view/posts/Main'
import Footer from './view/components/Footer'
import './view/components/App.css'


const App = (props) => {
  return (
    <div>
      <Header title="header" />
      <Main />
      <Footer title="footer" />
    </div>
  )
}

export default App;
