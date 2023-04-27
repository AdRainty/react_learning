import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {

    static propTypes = {
        updateTodo: PropTypes.func.isRequired
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm('确定删除吗?'))
            this.props.deleteTodo(id)
    }

    state = {
        mouse: false
    }

    render() {
        let {id, name, done} = this.props
        let {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse? '#ddd': 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse?'block': 'none' }} onClick={() => {this.handleDelete(id)}}>删除</button>
            </li>
        )
    }
}
