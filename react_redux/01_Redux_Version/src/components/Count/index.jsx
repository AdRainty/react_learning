import React, { Component } from 'react'

export default class Count extends Component {

    state = {
        count: 0
    }

    increment = () => {
        let {value} = this.selectNum
        let {count} = this.state
        this.setState({count: count + value * 1})
    }

    decrement = () => {
        let {value} = this.selectNum    
        let {count} = this.state
        this.setState({count: count - value * 1})
    }

    incrementIfOdd = () => {
        let {value} = this.selectNum
        let {count} = this.state
        if (count % 2 !== 0) this.setState({count: count + value * 1})
    }

    incrementAsync = () => {
        let {value} = this.selectNum    
        let {count} = this.state
        setTimeout(() => {
            this.setState({count: count + value * 1})
        }, 500)
        
    }

    render() {
        return (
            <div>
                <h1>Count sum: {this.state.count}</h1>
                <select ref={c => this.selectNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;&nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        )
    }
}
