
import { findBestMove } from '../aditionalfunctions/minmax'

export const gameStatus = (board, pos) => {
    const status = { result: 'UNKNOWN', types: [] }

    //check column win
    if (board[0][pos.y] === board[1][pos.y] && board[1][pos.y] === board[2][pos.y]) {
        status.result = 'WIN'
        status.types.push('col')
    }

    //check row win
    if (board[pos.x][0] === board[pos.x][1] && board[pos.x][1] === board[pos.x][2]) {
        status.result = 'WIN'
        status.types.push('row')
    }

    //check diagno win
    if (pos.x === pos.y && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        status.result = 'WIN'
        status.types.push('diag')
    }

    //check other diagno win
    if (3 - pos.x - pos.y === 1 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        status.result = 'WIN'
        status.types.push('adiag')
    }

    return status
}

export const getEmptyPositions = board => {
    const positions = []

    board.forEach((arr, x) => {
        arr.forEach((value, y) => {
            if (value === '') positions.push({ x, y })
        })
    })

    return positions
}

export const aiPlays = (board, level) => {

    const emptyPositions = getEmptyPositions(board)

    if (level === 0 && emptyPositions.length >= 0) {
        return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    } else if (emptyPositions.length >= 0 && level === 1) {
        return playMediuim(board, emptyPositions)
    } else if (level === 2) {
        return findBestMove(board)
    }

    return null

}

const playMediuim = (board, emptyPositions) => {
    const opponent = 'x'
    const player = 'o'

    // attack
    for (let i = 0; i < emptyPositions.length; i++) {
        let restPos = getRestPositions(emptyPositions[i])

        for (let j = 0; j < restPos.length; j++)
            if (restPos[j].every(pos => {
                return board[pos.x][pos.y] === player
            }))
                return emptyPositions[i]
    }

    // defense
    for (let i = 0; i < emptyPositions.length; i++) {
        let restPos = getRestPositions(emptyPositions[i])

        for (let j = 0; j < restPos.length; j++)
            if (restPos[j].every(pos => {
                return board[pos.x][pos.y] === opponent
            }))
                return emptyPositions[i]
    }


    return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
}

const getRestPositions = pos => {
    const arr = []

    arr.push([{ x: pos.x, y: 0 }, { x: pos.x, y: 1 }, { x: pos.x, y: 2 }].filter(item => item.y !== pos.y))

    arr.push([{ x: 0, y: pos.y }, { x: 1, y: pos.y }, { x: 2, y: pos.y }].filter(item => item.x !== pos.x))

    if (pos.x === pos.y)
        arr.push([{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }].filter(item => item.x !== pos.x))

    if (3 - pos.x - pos.y === 1)
        arr.push([{ x: 2, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 2 }].filter(item => item.x !== pos.x))

    return arr
}

export const getLineProperties = (type, pos) => {
    if (type === 'row')
        return {
            rot: 0,
            top: pos.x * 100 + 45,
            left: 15
        }

    if (type === 'col')
        return {
            rot: 90,
            top: 145,
            left: pos.y * 100 - 85
        }

    if (type === 'diag')
        return {
            rot: 45,
            top: 145,
            left: 15
        }

    if (type === 'adiag')
        return {
            rot: -45,
            top: 145,
            left: 15
        }
}

