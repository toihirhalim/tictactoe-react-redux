
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

