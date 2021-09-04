import React from 'react'
import Board from './Board'
import GameMode from './GameMode'
import Settings from './Settings'
import Statistics from './statistics'
import Status from './Status'
import { useSelector } from 'react-redux'

export default function Game() {
    const isOnlineMode = useSelector(state => state.isOnlineMode)
    return (
        <div className="game">
            <GameMode />
            {!isOnlineMode && <Settings />}
            <Board />
            <Status />
            <Statistics />
        </div>
    )
}
