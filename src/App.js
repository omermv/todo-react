import React, { Component } from 'react';
import './App.css'
import NewTodo from './NewTodo';
import Todo from './Todo';

class App extends Component {

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
          <h1>Omer's ToDo App</h1>
          <NewTodo />
          <table id="todos-table">
            <Todo />
          </table>
        </body>
      </div>
    )
  }

}

export default App;