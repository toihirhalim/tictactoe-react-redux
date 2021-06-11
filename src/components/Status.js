import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetGame } from '../actions'

export default function Status() {
    const dispatch = useDispatch()
    const isAiPlaying = useSelector(state => state.isAiPlaying)
    const player = useSelector(state => state.game.player)

    return (
        <div className="status">
            <div className="player" style={player === 'x' ? { borderBottom: ' 2px solid blue' } : null}>
                <p>You :</p>
                <p className="finger-paint blue player-char">x</p>
            </div>
            <div className="new-game">
                <div>
                    <button onClick={e => dispatch(resetGame())}>New Game</button>
                </div>
            </div>
            <div className="opponent" style={player === 'o' ? { borderBottom: '2px solid red' } : null}>
                <p>{isAiPlaying ? "AI" : "Opp"} :</p>
                <p className="finger-paint red player-char">o</p>
            </div>
        </div >
    )
}
