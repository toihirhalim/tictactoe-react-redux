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
                board.map((value, key) => {
                    return (<Case
                        key={key}
                        index={key}
                        lastplayed={lastMove === key}
                        value={value}
                        playAtPosition={playAtPosition}
                    />)
                })
            }
        </div>
    )
}
