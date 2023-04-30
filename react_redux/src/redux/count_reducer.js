import {INCREMENT, DECREMENT} from './constant'

let initState = 0

export default function countReducer(preState = initState, action) {
    console.log(preState, action)
    let {type, data} = action
    switch (type) {
        case INCREMENT :
            return preState + data * 1
        case DECREMENT:
            return preState - data * 1
        default:
            return preState
    }
}