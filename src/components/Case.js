import React from 'react'

export default function Case({ pos, value, lastplayed, playAtPosition }) {
    const handleClick = e => {
        if (value !== '') return
        playAtPosition(pos)
    }
    return (
        <div className={lastplayed ? "case red-border" : "case"} onClick={handleClick}>
            <p>{value}</p>
        </div>
    )
}
