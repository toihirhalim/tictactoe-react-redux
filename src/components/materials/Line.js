import React from 'react'

export default function Line({ rot, top, left }) {

    return (
        <div
            className="line"
            style={{
                top: top + 'px',
                left: left + 'px',
                transform: 'rotate(' + rot + 'deg)'
            }}
        >
        </div>
    )
}
