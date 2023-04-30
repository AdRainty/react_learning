let initState = 0

export default function countReducer(preState = initState, action) {
    console.log(preState, action)
    let {type, data} = action
    switch (type) {
        case 'increment' :
            return preState + data * 1
        case 'decrement':
            return preState - data * 1
        default:
            return preState
    }
}