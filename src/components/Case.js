import React from 'react'

export default function Case({ index, value, lastplayed, playAtPosition }) {
    const handleClick = e => {
        if (value !== '') return
        playAtPosition(index)
    }
    return (
        <div className={lastplayed ? "case red-border" : "case"} onClick={handleClick}>
            <p>{value}</p>
        </div>
    )
}
