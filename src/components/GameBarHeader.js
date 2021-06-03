import React from 'react'
import Equal from './materials/Equal'
import Minus from './materials/Minus'
import Plus from './materials/Plus'

export default function GameBarHeader({ wins, losses, draws }) {
    return (
        <div className="header bold">
            {
                wins !== 0 &&
                <div className="wins" style={{ flex: wins }}>
                    <Plus />
                    <p>{wins}</p>
                </div>
            }

            {
                draws !== 0 &&
                <div className="draws" style={{ flex: draws }}>
                    <Equal />
                    <p>{draws}</p>
                </div>
            }

            {
                losses !== 0 &&
                <div className="losses" style={{ flex: losses }}>
                    <Minus />
                    <p>{losses}</p>
                </div>
            }

        </div>
    )
}
