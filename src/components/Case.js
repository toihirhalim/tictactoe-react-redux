import React from 'react'

export default function Case({ pos, value, lastplayed, playAtPosition }) {
    const handleClick = e => {
        if (value !== '') return
        playAtPosition(pos)
    }
    return (
        <div className={lastplayed ? "case last-played-case" : "case"} onClick={handleClick}>
            <p>{value}</p>
        </div>
    )
}
