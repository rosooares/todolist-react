import React, { Component, Fragment } from 'react';

// import '../css/Tarefas.css';
import Search from './Search';

class Tarefas extends Component {
  render() {
    return  (
      <Fragment>
        <h1> Tarefas </h1>
        <div>
          <Search placeholder="Pesquisar tarefa..." />
        </div>
      </Fragment>
    );
  }
}

export default Tarefas;