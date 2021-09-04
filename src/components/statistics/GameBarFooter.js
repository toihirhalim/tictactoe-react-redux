import React from 'react'

export default function GameBarFooter({ wins, losses, draws, games }) {
    return (
        <div className="footer">
            {
                wins !== 0 &&
                <div className="element wins" style={{ flex: wins }}>
                    <p>{(wins * 100 / games).toFixed(1)}% Won</p>
                </div>
            }

            {
                draws !== 0 &&
                <div className="element draws" style={{ flex: draws }}>
                    <p>{(draws * 100 / games).toFixed(1)}% Draw</p>
                </div>
            }

            {
                losses !== 0 &&
                <div className="element losses" style={{ flex: losses }}>
                    <p>{(losses * 100 / games).toFixed(1)}% Lost</p>
                </div>
            }

        </div>
    )
}
