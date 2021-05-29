import React from 'react'
import Board from './Board'
import { useDispatch } from 'react-redux'
import { resetGame } from '../actions'
import Settings from './Settings'
import Statistics from './Statistics'

export default function Game() {
    const dispatch = useDispatch()

    return (
        <div className="game">
            <Settings />
            <Board />
            <div className="new-game">
                <button onClick={e => dispatch(resetGame())}>New Game</button>
            </div>
            <Statistics />
        </div>
    )
}
