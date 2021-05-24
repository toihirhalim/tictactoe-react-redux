export const setBoard = board => {
    return {
        type: 'CHANGE',
        board
    }
}
export const play = (index, value) => {
    return {
        type: 'PLAY',
        index,
        value
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