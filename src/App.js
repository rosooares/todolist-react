import React from 'react';
import './App.css';

import Header from './components/Header';
import Tarefas from './components/Tarefas';

function App() {
  return (
    <div className="App">
      <Header />
      <Tarefas />
    </div>
  );
}

export default App;
