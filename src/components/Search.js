import React, { Component } from 'react';
import '../css/Search.css';

class Search extends Component {
    constructor(){
        super();
        this.state = { 
            tarefa: "",
            tarefas: [
                {id: 1, name: 'Tarefa 1'},
                {id: 2, name: 'Tarefa 2'},
            ],
        }
    }
   
  render() {
    return (
      <form className="search-form">
        <input
          type="search"
          onChange={this.handleChange} 
        />
        <button onClick={this.addTarefa}>Add</button>
        <ul>
            {
                this.state.tarefas.map(tarefa => <li key={tarefa.id}> {tarefa.name} </li>)
            }
        </ul>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ tarefa: { id: Math.random().toString(36).substr(-8) ,name: event.target.value }});
  }

  addTarefa = () => {
    this.setState({
        tarefas: this.state.tarefas.concat(this.state.tarefa),
    })
  } 
}

export default Search;