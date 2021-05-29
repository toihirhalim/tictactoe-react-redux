import React from 'react'

export default function GameBarDefault({ wins, losses, draws }) {
    return (
        <div className="default">
            <div className="wins">
                <p>Wins : {wins}</p>
            </div>
            <div className="draws">
                <p>Draws : {draws}</p>
            </div>
            <div className="losses">
                <p>Losses : {losses}</p>
            </div>
        </div>
    )
}
