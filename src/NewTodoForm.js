import React, { Component } from 'react';
import './App.css'

class NewTodoForm extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleSorting}>Sort Todos By Status</button>
                <form id="create-todo-form" onSubmit={event => this.props.handleTodoCreation(event)}>
                    <input type="text" id="todo-content" value={this.props.input} onChange={event => this.props.handleInputChange(event)} />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm;