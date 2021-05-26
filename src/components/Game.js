import React from 'react'
import Board from './Board'
import { useDispatch } from 'react-redux'
import { resetGame } from '../actions'

export default function Game() {
    const dispatch = useDispatch()

    return (
        <div className="game">
            <Board />
            <div className="new-game">
                <button onClick={e => dispatch(resetGame())}>New Game</button>
            </div>
        </div>
    )
}
