import React, { Component } from 'react';
import './App.css'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleTodoCreation = this.handleTodoCreation.bind(this)
    this.handleSorting = this.handleSorting.bind(this);
    this.state = {
      todos: [],
      input: ""
    }
  }

  componentDidMount() {
    // // Runs after the first render() lifecycle
    this.GetAllTodos()
  }

  GetAllTodos() {
    let self = this
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var todosArr = JSON.parse(this.responseText);
        self.setState({ todos: todosArr });
      }
    };

    xhttp.open("GET", "https://cse204.work/todos", true);
    xhttp.setRequestHeader("x-api-key", "398193-2d3316-05c01b-d2dd01-605963");
    xhttp.send();
  }

  handleDelete(todoID) {
    let self = this;
    // Initalize AJAX Request
    var xhttp4 = new XMLHttpRequest();
    // Response handler
    xhttp4.onreadystatechange = function () {
      // Wait for readyState = 4 & 200 response
      if (this.readyState === 4 && this.status === 200) {
        // parse JSON response
        // self.GetAllTodos();
        const remainingTodos = self.state.todos.filter((todo) => {
          // Looping through all todos, if the id of the current todo DOES NOT equal the id of the todo we want to delete, keep it
          if (todo.id !== todoID) {
            return todo;
          }
        });
        self.setState({
          todos: remainingTodos
        })
        console.log("succeed");
      } else if (this.readyState === 4) {
        // this.status !== 200, error from server
        console.log("failed to delete" + this.responseText);
      }
    }
    xhttp4.open("DELETE", "https://cse204.work/todos/" + todoID, true);
    xhttp4.setRequestHeader("Content-type", "application/json");
    xhttp4.setRequestHeader("x-api-key", "398193-2d3316-05c01b-d2dd01-605963");
    xhttp4.send();
  }

  handleCompletion(event) {
    let self = this;
    var data = {
      completed: event.target.checked
    }
    // Initalize AJAX Request
    var xhttp3 = new XMLHttpRequest();
    // Response handler
    xhttp3.onreadystatechange = function () {
      // Wait for readyState = 4 & 200 response
      if (this.readyState === 4 && this.status === 200) {
        // parse JSON response
        var response = JSON.parse(this.responseText);
        self.GetAllTodos();
        console.log(response);
      } else if (this.readyState === 4) {
        // this.status !== 200, error from server
        console.log(this.responseText);
      }
    }
    xhttp3.open("PUT", "https://cse204.work/todos/" + event.target.className, true);
    xhttp3.setRequestHeader("Content-type", "application/json");
    xhttp3.setRequestHeader("x-api-key", "398193-2d3316-05c01b-d2dd01-605963");
    xhttp3.send(JSON.stringify(data));
  }

  handleInputChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleTodoCreation(event) {
    event.preventDefault();
    let self = this
    const newTodoTextValue = this.state.input
    // Setting variable for form input (get from HTML form)
    var data = {
      text: newTodoTextValue
    }
    // Initalize AJAX Request
    var xhttp2 = new XMLHttpRequest();
    // Response handler
    xhttp2.onreadystatechange = function () {
      // Wait for readyState = 4 & 200 response
      if (this.readyState === 4 && this.status === 200) {
        // parse JSON response
        var newTodoObj = JSON.parse(this.responseText);
        console.log(newTodoObj);
        self.setState({
          input: "",
          todos: [...self.state.todos, newTodoObj]
        })
      } else if (this.readyState === 4) {
        // this.status !== 200, error from server
        console.log(this.responseText);
      }
    }
    xhttp2.open("POST", "https://cse204.work/todos", true);
    xhttp2.setRequestHeader("Content-type", "application/json");
    xhttp2.setRequestHeader("x-api-key", "398193-2d3316-05c01b-d2dd01-605963");
    xhttp2.send(JSON.stringify(data));
  }

  handleSorting() {
    let sortedTodos = this.state.todos.sort(function (a, b) {
      let aNum = (a.completed) ? 1 : 0
      let bNum = (b.completed) ? 1 : 0
      return bNum - aNum
    })
    this.setState({
      todos: sortedTodos
    })
  }


  render() {
    return (
      <div>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ToDo App</title>
          <link rel="stylesheet" href="ToDo.css" />
        </head>
        <body>
          <h1>Omer And Omri's ToDo App</h1>
          <NewTodoForm input={this.state.input} handleInputChange={this.handleInputChange} handleTodoCreation={this.handleTodoCreation} handleSorting={this.handleSorting} />
          <table id="todos-table">
            {this.state.todos.map((todo) => (
              <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} handleDelete={this.handleDelete} handleCompletion={this.handleCompletion}></Todo>
            ))}
          </table>
        </body>
      </div>
    )
  }

}
export default App;
