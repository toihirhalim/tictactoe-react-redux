import React from 'react'
import GameBar from './GameBar'
import GeneralStatistics from './GeneralStatistics'

export default function Statistics() {

    return (
        <div className="statistics">
            <GeneralStatistics />
            <GameBar />
        </div>
    )
}
