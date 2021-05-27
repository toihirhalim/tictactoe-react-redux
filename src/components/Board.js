import React, { useEffect } from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play, gameOver } from '../actions'
import { gameStatus } from '../aditionalfunctions'

export default function Board() {
    const board = useSelector(state => state.game.board)
    const lastMove = useSelector(state => state.game.lastMove)
    const movesCount = useSelector(state => state.game.movesCount)
    const isGameOver = useSelector(state => state.game.isGameOver)
    const dispatch = useDispatch()

    const playAtPosition = pos => {
        if (isGameOver) return

        dispatch(play(pos))
    }

    useEffect(() => {
        if (movesCount >= 5) {
            if (gameStatus(board, lastMove).result === 'WIN') {
                dispatch(gameOver())
                console.log('game over: ' + board[lastMove.x][lastMove.y] + ' won !!!')
            } else if (movesCount === 9) {
                console.log('game over but draw !!!')
            }
        }
    }, [movesCount, lastMove, board, dispatch])

    return (
        <div className="board">
            {
                board.map((arr, xKey) => {
                    return arr.map((value, yKey) => {
                        const key = xKey + "," + yKey
                        const pos = { x: xKey, y: yKey }
                        const lastPlayed = lastMove.x === xKey && lastMove.y === yKey

                        return (<Case
                            key={key}
                            pos={pos}
                            lastplayed={lastPlayed}
                            value={value}
                            playAtPosition={playAtPosition}
                        />)
                    })
                })
            }
        </div>
    )
}
