const game = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
    player: 'x',
    movesCount: 0,
    lastMove: {
        x: -1,
        y: -1,
    }
}

const gameReducer = (state = game, action) => {
    switch (action.type) {
        case 'SET':
            return action.game
        case 'PLAY':
            return {
                board: [
                    ...state.board.slice(0, action.pos.x),
                    [
                        ...state.board[action.pos.x].slice(0, action.pos.y),
                        state.player,
                        ...state.board[action.pos.x].slice(action.pos.y + 1, state.board.length)
                    ],
                    ...state.board.slice(action.pos.x + 1, state.board.length)
                ],
                player: state.player === 'x' ? 'o' : 'x',
                lastMove: action.pos,
                movesCount: state.movesCount + 1
            }
        case 'SWITCH':
            return {
                ...state,
                player: state.player === 'x' ? 'o' : 'x'
            }
        case 'RESET':
            return {
                ...state,
                board: game.board,
                lastMove: game.lastMove,
                movesCount: game.movesCount
            }
        default:
            return state
    }
}

export default gameReducer;