import React, { Component } from 'react';
import Header from './Header'
import Docs from './Docs'
import Tutorial from './Tutorial'
import Blog from './Blog'
import Community from './Community'
import Languages from './Languages'
import Github from './Github'
import Version from './Version'
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path = "/docs" Component = {Docs}/>
          <Route exact path = "/tutorial" Component = {Tutorial}/>
          <Route exact path = "/blog" Component = {Blog}/>
          <Route exact path = "/community" Component = {Community}/>
          <Route exact path = "/version" Component = {Version}/>
          <Route exact path = "/languages" Component = {Languages}/>
          <Route exact path = "/github" Component = {Github}/>
        </div>
      </Router>
    );
  }  
}

export default App;
