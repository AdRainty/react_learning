import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }

    handleClearAll = () => {
        this.props.clearAllTodo()
    }

    render() {
        let { todos } = this.props
        let doneCount = todos.reduce((pre, todoObj) => {
            return pre + (todoObj.done? 1: 0);
        }, 0)
        let total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={total !== 0 && doneCount === total} onChange={this.handleCheckAll}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}
