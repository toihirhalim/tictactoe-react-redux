import React from 'react'
import Case from './Case'
import { useSelector, useDispatch } from 'react-redux'
import { play } from '../actions'

export default function Board() {
    const board = useSelector(state => state.game.board)
    const lastMove = useSelector(state => state.game.lastMove)
    const dispatch = useDispatch()

    const playAtPosition = pos => {
        dispatch(play(pos))
    }

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
