import React from 'react'
import Switch from './materials/Switch'
import { useSelector, useDispatch } from 'react-redux'
import { playWithAi, playWithHumain } from '../actions'

export default function Opponent() {
    const isAiPlaying = useSelector(state => state.isAiPlaying)
    const dispatch = useDispatch()

    const changeOpponent = e => {
        if (isAiPlaying) {
            dispatch(playWithHumain())
        } else {
            dispatch(playWithAi())
        }
    }

    return (
        <div className="opponent">
            <h5>Opponent</h5>
            <Switch
                on={isAiPlaying}
                value={isAiPlaying ? 'Ai' : 'Human'}
                onClick={changeOpponent}
            />
        </div>
    )
}
