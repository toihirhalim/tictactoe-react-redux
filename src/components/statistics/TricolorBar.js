import React from 'react'

export default function TricolorBar({ wins, losses, draws }) {
    return (
        <div className="tricolor-bar">
            <div className="bar win" style={{ flex: wins }}></div>
            <div className="bar draws" style={{ flex: draws }}></div>
            <div className="bar losses" style={{ flex: losses }}></div>
        </div>
    )
}
