import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {date: '', description: '', todos: []}
  }

 
  
  inputChanged1 = (event) => {
    this.setState({description: event.target.value});
  }
  inputChanged2 = (event) => {
	this.setState({date: event.target.value});
  }

 
  
  addTodo = (event) => {
    event.preventDefault();
	 const newTodo = {description: this.state.description, date: this.state.date};
    this.setState({
      todos: [...this.state.todos, newTodo]
	  
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
		<form>
		<fieldset>
		<legend align = "left">Add todo:</legend>
          <form onSubmit={this.addTodo}>Description:
		  <input type="text" onChange={this.inputChanged1} value={this.state.description}/>
            
			  </form>
			  
			  <form onSubmit={this.addTodo}>Date:
		  <input type="text" onChange={this.inputChanged2} value={this.state.date}/>
            <input type="submit" value="Add"/>
			  </form>
          </fieldset>
		  </form>
        </div><br/>

        <div>
          <table>
		  <tbody>
		  <tr><th>Description</th><th>Date</th></tr>
            {this.state.todos.map((item, index) =>  <tr> <td key={index}>{item.description} </td>
			<td key={index}>{item.date}</td></tr> )}
          </tbody>
		  </table>
        </div>

      </div>    
    );
  }
}

export default App;