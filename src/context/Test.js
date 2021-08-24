import React, { useContext, useState, useEffect } from 'react'
import { SocketContext } from './socket';
export default function Test() {
    const [state, setstate] = useState({})
    const socket = useContext(SocketContext)


    useEffect(() => {

        socket.on('connect', () => {
            setstate(state => ({ ...state, conected: socket.connected }))
        })

        socket.on('disconnect', () => {
            setstate(state => ({ ...state, conected: socket.connected }))
        })
    }, [socket])

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <div>
            socket : {socket && <p>{socket.id}</p>}
        </div>
    )
}
