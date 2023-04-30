import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

    increment = () => {
        let {value} = this.selectNum
        store.dispatch({type: 'increment', data: value})
    }

    decrement = () => {
        let {value} = this.selectNum    
        store.dispatch({type: 'decrement', data: value})
    }

    incrementIfOdd = () => {
        let {value} = this.selectNum
        let count = store.getState()
        if (count % 2 !== 0) store.dispatch({type: 'increment', data: value})
    }

    incrementAsync = () => {
        let {value} = this.selectNum   
        setTimeout(() => {
            store.dispatch({type: 'increment', data: value})
        }, 500)
        
    }

    render() {
        return (
            <div>
                <h1>Count sum: {store.getState()}</h1>
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
