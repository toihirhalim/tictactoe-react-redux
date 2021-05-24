const board = ['', '', '', '', '', '', '', '', '']

const boardReducer = (state = board, action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.board
        case 'PLAY':
            return [
                ...state.slice(0, action.index),
                action.value,
                ...state.slice(action.index + 1, state.length)
            ]
        default:
            return state
    }
}

export default boardReducer;