export const setGame = game => {
    return {
        type: 'SET',
        game
    }
}
export const play = (pos) => {
    return {
        type: 'PLAY',
        pos,
    }
}
export const switchPlayer = () => {
    return {
        type: 'SWITCH'
    }
}
export const resetGame = () => {
    return {
        type: 'RESET'
    }
}

export const addStatistic = stat => {
    return {
        type: 'ADD',
        stat
    }
}

export const clearStatatistics = () => {
    return {
        type: 'CLEAR',
    }
}