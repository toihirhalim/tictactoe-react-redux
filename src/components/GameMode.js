import React from 'react'
import { playOnline, playOffline } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

export default function GameMode() {
    const isOnlineMode = useSelector(state => state.isOnlineMode)
    const dispatch = useDispatch()

    return (
        <div className="bold game-mode">
            <h4>Game Mode :</h4>
            <div className="choices dead-background">
                <div className={isOnlineMode ? "choice green-background" : "choice"} onClick={e => dispatch(playOnline())}>
                    <p>Online</p>
                </div>
                <div className={isOnlineMode ? "choice" : "choice green-background"} onClick={e => dispatch(playOffline())}>
                    <p>Offline</p>
                </div>
            </div>
        </div>
    )
}
