const statistics = {
    wins: 0,
    losses: 0,
    draws: 0
}

const statisticsReducer = (state = statistics, action) => {
    switch (action.type) {
        case 'WIN':
            return { ...state, wins: state.wins + 1 }
        case 'LOST':
            return { ...state, losses: state.losses + 1 }
        case 'DRAW':
            return { ...state, draws: state.draws + 1 }
        case 'SET':
            return action.statistics
        case 'CLEAR':
            return statistics
        default:
            return state
    }
}

export default statisticsReducer;