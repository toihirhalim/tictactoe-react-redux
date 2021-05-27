// game actions
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
export const gameOver = () => {
    return {
        type: 'OVER'
    }
}

// statistics actions
export const setStatistic = (wins, losses, draws) => {
    return {
        type: 'SET',
        statatistics: { wins, losses, draws }
    }
}

export const clearStatatistics = () => {
    return {
        type: 'CLEAR',
    }
}

export const wonGame = () => {
    return {
        type: 'WIN',
    }
}

export const lostGame = () => {
    return {
        type: 'LOST',
    }
}

export const drawGame = () => {
    return {
        type: 'DRAW',
    }
}