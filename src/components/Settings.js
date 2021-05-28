import React from 'react'
import Level from './Level'
import Opponent from './Opponent'
import { useSelector } from 'react-redux'

export default function Settings() {
    const isAiPlaying = useSelector(state => state.isAiPlaying)
    return (
        <div className="settings">
            <Opponent />
            { isAiPlaying && <Level />}
        </div>
    )
}
