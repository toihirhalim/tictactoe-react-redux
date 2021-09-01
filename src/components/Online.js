import React, { useState, useEffect, useContext, useCallback } from 'react'
import { SocketContext } from '../context/socket'

export default function Online() {
    const [online, setOnline] = useState(0)
    const [games, setGames] = useState(0)
    const socket = useContext(SocketContext)

    const playersCallBack = useCallback(online => {
        setOnline(online)
    }, [setOnline])

    const gamesCallBack = useCallback(games => {
        setGames(games)
    }, [setGames])

    useEffect(() => {
        socket.on('online', playersCallBack)
        socket.on('games', gamesCallBack)
        return () => {
            socket.off('online', playersCallBack)
            socket.off('games', gamesCallBack)
        }
    }, [socket, playersCallBack, gamesCallBack])

    return (
        <div>
            <p><strong>{online}</strong> : players connected</p>
            <p><strong>{games}</strong> : games in progress</p>
        </div>
    )
}
