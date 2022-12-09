import React, { Component } from 'react';
// import { ReactDOM } from 'react-dom';
import './App.css'

class Todo extends Component {

    handleDelete() {
        this.props.handleDelete(this.props.id);
    }

    handleCompletion(event) {
        this.props.handleCompletion(event)
    }

    render() {
        return (
            <div>
                <tr className={this.props.id}>
                    <td>
                        <div className='todo-item'>
                            <input type='checkbox' className={this.props.id} checked={this.props.completed} onChange={event => this.handleCompletion(event)} />
                            <span>{this.props.text}</span>
                            <button className={this.props.id} onClick={() => this.handleDelete()}>X</button>
                        </div>
                    </td>
                </tr>
            </div>
        )
    }
}

export default Todo;