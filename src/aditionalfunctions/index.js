
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

    if (level === 0 || true) {
        const emptyPositions = getEmptyPositions(board)

        if (emptyPositions.length >= 0)
            return emptyPositions[Math.floor(Math.random() * emptyPositions.length)];
    }

    return null

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

