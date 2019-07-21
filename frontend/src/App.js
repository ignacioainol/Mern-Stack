import React from 'react';
import './App.css';

import Navigation from './components/Navigation';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';

function App() {
  return (
   <div>
     <Navigation/>
     <NotesList/>
     Hello world
     </div>
  );
}

export default App;
