import React, { useState, useEffect } from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play, gameOver, wonGame, lostGame, drawGame } from '../actions'
import { gameStatus, aiPlays, getLineProperties } from '../aditionalfunctions'
import Line from './materials/Line'

export default function Board() {
    const game = useSelector(state => state.game)
    const isAiPlaying = useSelector(state => state.isAiPlaying)
    const level = useSelector(state => state.level)
    const dispatch = useDispatch()
    const [lines, setLines] = useState([])

    const playAtPosition = pos => {
        if (game.isGameOver || (game.player === 'o' && isAiPlaying)) return

        dispatch(play(pos))
    }

    useEffect(() => {
        if (game.gameIsOver) return
        let gameIsOver = false
        if (game.movesCount >= 5) {
            const status = gameStatus(game.board, game.lastMove)
            if (status.result === 'WIN') {
                dispatch(gameOver())

                if (game.board[game.lastMove.x][game.lastMove.y] === 'x') {
                    dispatch(wonGame())
                } else {
                    dispatch(lostGame())
                }
                gameIsOver = true
                setLines(status.types)
            } else if (game.movesCount === 9) {
                dispatch(drawGame())
                gameIsOver = true
            } else {
                setLines([])
            }
        } else {
            setLines([])
        }

        if (!gameIsOver && isAiPlaying && game.player === 'o') {
            const pos = aiPlays(game.board, level)
            if (pos) {
                setTimeout(() => {
                    dispatch(play(pos))
                }, 500);
            }
        }

    }, [game.gameIsOver, game.player, game.movesCount, game.board,
    game.lastMove, isAiPlaying, level, dispatch, setLines])

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
            {
                lines.map((line, key) => {
                    const props = getLineProperties(line, game.lastMove)
                    return (
                        <Line
                            key={key}
                            rot={props.rot}
                            top={props.top}
                            left={props.left}
                        />
                    )
                })
            }
        </div>
    )
}
