import React from 'react';
import { Route } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import UsersPage from "./Users/UsersPage"
import About from './components/About/About'
import Moment from 'react-moment';
class App extends React.Component {


  //     
  // this.ourUsersPageComponents = this.ourUsersPageComponents.bind(this)
  // }

  // ourUsersPageComponents() {
  //   return <UsersPage isGrid={this.state.isGrid} />
  // }


  render() {
    return (
      <>
        <Header onChangeLayout={this.changeLayout} />
        {/* <UsersPage /> */}
        <Route exact path="/" component={UsersPage} />
        <Route exact path="/about" component={About} />
        <Footer />
      </>
    );
  }
}
export default App
