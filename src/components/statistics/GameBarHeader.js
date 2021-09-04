import React from 'react'
import Equal from '../materials/Equal'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import './statistics.css'

export default function GameBarHeader({ wins, losses, draws }) {
    return (
        <div className="game-bar-header bold">
            {
                wins !== 0 &&
                <div className="wins" style={{ flex: wins }}>
                    <FaPlusSquare />
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
                    <FaMinusSquare />
                    <p>{losses}</p>
                </div>
            }

        </div>
    )
}
