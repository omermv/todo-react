import React, { Component } from 'react';
import './App.css'

class NewTodo extends Component {

    render() {
        return (
            <div>
                <form id="create-todo-form">
                    <input type="text" id="todo-content" />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodo;