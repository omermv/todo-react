import React, { Component } from 'react';
import './App.css'

class Todo extends Component {

    render() {
        return (
            <div>
                <tr>
                    <td>
                        <div className='todo-item'>
                            <input type='checkbox' />
                            <span>Example todo item</span>
                            <button>X</button>
                        </div>
                    </td>
                </tr>
            </div>
        )
    }
}

export default Todo;