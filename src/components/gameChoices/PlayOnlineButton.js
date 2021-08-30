import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { SocketContext } from '../../context/socket'
import { AiFillThunderbolt, AiOutlineReload } from 'react-icons/ai'
import { CgSearchLoading } from 'react-icons/cg'
import { useHistory } from 'react-router'

const stages = {
    0: 'btn-not-allowed',
    1: 'btn-pointer',
    2: 'btn-wait',
    3: 'btn-pointer'
}

export default function PlayOnlineButton() {
    const history = useHistory()
    const isLogged = useSelector(state => state.auth.isLogged)
    const [isLoading, setLoading] = useState(false)
    const socket = useContext(SocketContext)
    const [stage, setStage] = useState(0)

    const handleClick = () => {
        if (!isLogged || isLoading) return
        setLoading(true)
        socket.emit('play-request', 'abcd')
    }

    const handleGameRequestAccepted = useCallback(id => {
        setLoading(false)
        history.push('game/' + id)
    }, [history])

    const handleGameRequestRejected = useCallback(() => {
        setLoading(false)
    }, [])

    useEffect(() => {
        socket.on('request-accepted', handleGameRequestAccepted)
        socket.on('request-rejected', handleGameRequestRejected)
        return () => {
            socket.off('request-accepted', handleGameRequestAccepted)
            socket.off('request-rejected', handleGameRequestRejected)
        }
    }, [socket, handleGameRequestAccepted, handleGameRequestRejected])

    useEffect(() => {
        setStage(isLogged ? 1 : 0)
    }, [isLogged, setStage])

    useEffect(() => {
        setStage(s => isLoading ? 2 : s > 1 ? 3 : 1)
    }, [isLoading, setStage])

    return (
        <button className={"play-online-btn " + stages[stage]} onClick={handleClick}>
            <span className="btn-text">Play Now </span>
            {
                stage <= 1 ?
                    <AiFillThunderbolt className="btn-icon" />
                    : stage === 2 ?
                        <CgSearchLoading className="btn-icon" />
                        :
                        <AiOutlineReload className="btn-icon" />
            }
        </button>
    )
}

