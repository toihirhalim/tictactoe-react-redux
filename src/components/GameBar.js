import React from 'react'
import { useSelector } from 'react-redux'
import GameBarDefault from './GameBarDefault'
import GameBarFooter from './GameBarFooter'
import GameBarHeader from './GameBarHeader'
import TricolorBar from './materials/TricolorBar'

export default function GameBar() {
    const games = useSelector(state => state.statistics.wins + state.statistics.losses + state.statistics.draws)
    const statistics = useSelector(state => state.statistics)

    return (
        <div className="game-bar">

            {
                games === 0 ?
                    (
                        <GameBarDefault
                            wins={statistics.wins}
                            losses={statistics.losses}
                            draws={statistics.draws}
                        />
                    ) :
                    (
                        <div>
                            <GameBarHeader
                                wins={statistics.wins}
                                losses={statistics.losses}
                                draws={statistics.draws}
                            />

                            <TricolorBar
                                wins={statistics.wins}
                                losses={statistics.losses}
                                draws={statistics.draws}
                            />

                            <GameBarFooter
                                wins={statistics.wins}
                                losses={statistics.losses}
                                draws={statistics.draws}
                                games={games}
                            />
                        </div>
                    )

            }


        </div >
    )
}
