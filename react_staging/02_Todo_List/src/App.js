import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: false },
      { id: '003', name: '打豆豆', done: false }
    ]
  }

  addTodo = (todoObj) => {
    let { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  updateTodo = (id, done) => {
    let { todos } = this.state
    let newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) return { ...todoObj, done: done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  deleteTodo = (id) => {
    let { todos } = this.state
    let newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })
    this.setState({ todos: newTodos })
  }

  checkAllTodo = (done) => {
    let { todos } = this.state
    let newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })
    this.setState({ todos: newTodos })
  }

  clearAllTodo = () => {
    let { todos } = this.state
    let newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({ todos: newTodos })
  }

  render() {
    let { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}/>
        </div>
      </div>
    )
  }
}
