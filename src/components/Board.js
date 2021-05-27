import React, { useEffect } from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play, gameOver } from '../actions'
import { gameStatus } from '../aditionalfunctions'

export default function Board() {
    const game = useSelector(state => state.game)
    const dispatch = useDispatch()

    const playAtPosition = pos => {
        if (game.isGameOver) return

        dispatch(play(pos))
    }

    useEffect(() => {
        if (game.movesCount >= 5) {
            if (gameStatus(game.board, game.lastMove).result === 'WIN') {
                dispatch(gameOver())
                console.log('game over: ' + game.board[game.lastMove.x][game.lastMove.y] + ' won !!!')
            } else if (game.movesCount === 9) {
                console.log('game over but draw !!!')
            }
        }
    }, [game.movesCount, game.board, game.lastMove, dispatch])

    return (
        <div className="board">
            {
                game.board.map((arr, xKey) => {
                    return arr.map((value, yKey) => {
                        const key = xKey + "," + yKey
                        const pos = { x: xKey, y: yKey }
                        const lastPlayed = game.lastMove.x === xKey && game.lastMove.y === yKey

                        return (
                            <Case
                                key={key}
                                pos={pos}
                                lastplayed={lastPlayed}
                                value={value}
                                playAtPosition={playAtPosition}
                            />
                        )
                    })
                })
            }
        </div>
    )
}
