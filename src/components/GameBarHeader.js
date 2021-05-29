import React from 'react'

export default function GameBarHeader({ wins, losses, draws }) {
    return (
        <div className="header bold">
            {
                wins !== 0 &&
                <div className="wins" style={{ flex: wins }}>
                    <p>{wins}</p>
                </div>
            }

            {
                draws !== 0 &&
                <div className="draws" style={{ flex: draws }}>
                    <p>{draws}</p>
                </div>
            }

            {
                losses !== 0 &&
                <div className="losses" style={{ flex: losses }}>
                    <p>{draws}</p>
                </div>
            }

        </div>
    )
}
