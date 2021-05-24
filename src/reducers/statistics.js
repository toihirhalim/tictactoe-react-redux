const statisticsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.stat]
        case 'CLEAR':
            return []
        default:
            return state
    }
}

export default statisticsReducer;