import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {date: '', description: '', todos: []}
    this.state = {description: '', date:'', todos: []}
    this.removeTodo = this.removeTodo.bind(this)
  }

//  todos.filter((filter, i) => i !== index)

  inputChanged = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTodo = (event) => {
    event.preventDefault();
	 const newTodo = {description: this.state.description, date: this.state.date};
    this.setState({
      todos: [...this.state.todos, newTodo]

    });
  }

  removeTodo(index) {
    const todos = this.state.todos.filter((todo, itemIndex) => {
      return itemIndex !== index
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
		<fieldset>
		<legend align = "left">Add todo:</legend>
          <form onSubmit={this.addTodo}>Description:
		  <input type="text" name="description" onChange={this.inputChanged} value={this.state.description}/>

			  </form>

			  <form onSubmit={this.addTodo}>Date:
		  <input type="text" name="date" onChange={this.inputChanged} value={this.state.date}/>
            <input type="submit" value="Add"/>
			  </form>
          </fieldset>
        </div><br/>

        <div>
          <table>
		  <tbody>
		  <tr><th>Description</th><th>Date</th></tr>
            {this.state.todos.map((item, index) =>  <tr> <td key={index}>{item.description} </td>
			<td key={index}>{item.date}</td><br/>
      <button id = "deleteButton" name="deleteItem" onClick={event => this.removeTodo(index,event)}>Delete</button><br/>
      </tr> )}
          </tbody>
		  </table>

        </div>


      </div>
    );
  }
}

export default App;
