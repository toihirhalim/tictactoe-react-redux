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

// is humain playing actions
export const playWithHumain = () => {
    return {
        type: 'HUMAIN'
    }
}

export const playWithAi = () => {
    return {
        type: 'AI'
    }
}

// ai level actions
export const aiPlayDumb = () => {
    return {
        type: 'DUMB'
    }
}
export const aiPlayMedium = () => {
    return {
        type: 'MEDIUM',
    }
}
export const aiPlayHard = () => {
    return {
        type: 'HARD'
    }
}

// online mode actions
export const playOnline = () => {
    return {
        type: "ONLINE"
    }
}

export const playOffline = () => {
    return {
        type: "OFFLINE"
    }
}

// auth actions

export const login = token => {
    return {
        type: 'LOGIN',
        token
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const setToken = token => {
    return {
        type: 'TOKEN',
        token
    }
}

