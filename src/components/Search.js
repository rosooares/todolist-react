import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
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
      <form className="search-form" onSubmit={this.handleSubmit} >
         <TextField 
          type="text"
          onChange={this.handleChange}
          label="Tarefa" 
          InputProps={{
            startAdornment: <SearchIcon position="start" />,
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
        <ul>
            {
                this.state.tarefas.map(tarefa => <li className="itemTarefa" key={tarefa.id}> {tarefa.name} </li>)
            }
        </ul>
      </form>
    );
  }

  handleChange = event => {
    this.setState({ tarefa: { id: Math.random().toString(36).substr(-8) ,name: event.target.value }});
  }

  handleSubmit = event => {
    this.setState({
      tarefas: [
        ...this.state.tarefas,
        this.state.tarefa,
      ]
    })

    // this.setState({tarefa: ''})

    event.preventDefault();
  } 
}

export default Search;