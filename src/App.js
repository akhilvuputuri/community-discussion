import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Qna from './pages/Qna'
import Nav from './components/Nav'

class App extends Component {
  render () {
    return (
      <Router>
        
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/questions/:topic" component={Qna} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;