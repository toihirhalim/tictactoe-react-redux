import React, { useState, useEffect } from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play } from '../actions'
import { gameStatus } from '../aditionalfunctions'

export default function Board() {
    const board = useSelector(state => state.game.board)
    const lastMove = useSelector(state => state.game.lastMove)
    const movesCount = useSelector(state => state.game.movesCount)
    const dispatch = useDispatch()
    const [status, setStatus] = useState({ result: 'UNKNOWN' })

    const playAtPosition = pos => {
        if (status.result === 'WIN') return

        dispatch(play(pos))
    }

    useEffect(() => {
        if (movesCount >= 5) {
            setStatus(gameStatus(board, lastMove))
        }
    }, [movesCount, lastMove, board])

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
