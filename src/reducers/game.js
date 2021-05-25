const game = {
    board: ['', '', '', '', '', '', '', '', ''],
    player: 'x'
}

const gameReducer = (state = game, action) => {
    switch (action.type) {
        case 'SET':
            return action.game
        case 'PLAY':
            return {
                board: [
                    ...state.board.slice(0, action.pos),
                    state.player,
                    ...state.board.slice(action.pos + 1, state.length)
                ],
                player: state.player === 'x' ? 'o' : 'x'
            }
        case 'SWITCH':
            return {
                ...state,
                player: state.player === 'x' ? 'o' : 'x'
            }
        case 'RESET':
            return {
                ...state,
                board: game.board
            }
        default:
            return state
    }
}

export default gameReducer;