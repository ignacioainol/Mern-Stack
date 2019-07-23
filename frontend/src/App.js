import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
  <Router>
    <Navigation/>

    <div className="container p-4">
      <Route exact path="/" component={NotesList}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/create" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>
    </div>


    <script src="https://use.fontawesome.com/6e2ac6f992.js"></script>

  </Router>
  );
}

export default App;
