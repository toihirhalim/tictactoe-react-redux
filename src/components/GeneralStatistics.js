import React from 'react'
import { useSelector } from 'react-redux'

export default function GeneralStatistics() {
    const rating = useSelector(state => state.statistics.wins * 3 - state.statistics.losses * 2 + state.statistics.draws)
    const games = useSelector(state => state.statistics.wins + state.statistics.losses + state.statistics.draws)

    return (
        <div className="general">
            <div className="infos">
                <p>Rating : </p>
                <p className="rating">{rating}</p>
            </div>
            <div className="infos">
                <p>Games : </p>
                <p className="games"> {games}</p>
            </div>
        </div>
    )
}
