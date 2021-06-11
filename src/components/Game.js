import React from 'react'
import Board from './Board'
import Settings from './Settings'
import Statistics from './Statistics'
import Status from './Status'

export default function Game() {
    return (
        <div className="game">
            <Settings />
            <Board />
            <Status />
            <Statistics />
        </div>
    )
}
