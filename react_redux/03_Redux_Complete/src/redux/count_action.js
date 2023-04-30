import {INCREMENT, DECREMENT} from './constant'

export let createIncrementAction = data => ({
    type: INCREMENT,
    data
})

export let createDecrementAction = data => ({
    type: DECREMENT,
    data
})