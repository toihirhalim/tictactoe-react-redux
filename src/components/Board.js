import React, { useEffect } from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play, gameOver, wonGame, lostGame, drawGame } from '../actions'
import { gameStatus, aiPlays, AiLevel } from '../aditionalfunctions'

export default function Board() {
    const game = useSelector(state => state.game)
    const isAiPlaying = useSelector(state => state.isAiPlaying)
    const level = useSelector(state => state.level)
    const dispatch = useDispatch()

    const playAtPosition = pos => {
        if (game.isGameOver || (game.player === 'o' && isAiPlaying)) return

        dispatch(play(pos))
    }

    const aiTurn = () => {
        if (isAiPlaying && game.player === 'o') {
            const pos = aiPlays(game.board, level)
            if (pos) {
                setTimeout(() => {
                    dispatch(play(pos))
                }, 500);
            }
        }
    }

    useEffect(() => {
        let gameIsOver = false
        if (game.movesCount >= 5) {
            if (gameStatus(game.board, game.lastMove).result === 'WIN') {
                dispatch(gameOver())

                if (game.board[game.lastMove.x][game.lastMove.y] === 'x') {
                    dispatch(wonGame())
                } else {
                    dispatch(lostGame())
                }
                gameIsOver = true
            } else if (game.movesCount === 9) {
                dispatch(drawGame())
                gameIsOver = true
            }
        }

        if (!gameIsOver) aiTurn()

    }, [game.player, game.movesCount, game.board, game.lastMove, dispatch, isAiPlaying])

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
