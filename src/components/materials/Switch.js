import React from 'react'
import Circle from './Circle'

export default function Switch({ on, value, onClick }) {

    return (
        <div onClick={onClick}>
            {
                on ?
                    (
                        <div className="switch" >
                            <p className="value">{value}</p>
                            <Circle />
                        </div>
                    ) :
                    (
                        <div className="switch" >
                            <Circle />
                            <p className="value">{value}</p>
                        </div>
                    )
            }
        </div>
    )
}
