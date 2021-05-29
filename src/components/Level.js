import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import { useSelector, useDispatch } from 'react-redux'
import 'react-rangeslider/lib/index.css'
import { aiPlayDumb, aiPlayMedium, aiPlayHard } from '../actions'

export default function Level() {
    const [level, setLevel] = useState(useSelector(state => state.level * 100))
    const dispatch = useDispatch()

    const labels = {
        0: 'Dumb',
        100: 'Meduim',
        200: 'Hard'
    }

    const changeLevel = e => {
        if (level < 50) {
            dispatch(aiPlayDumb())
            setLevel(0)
        }
        else if (level < 150) {
            dispatch(aiPlayMedium())
            setLevel(100)
        }
        else {
            dispatch(aiPlayHard())
            setLevel(200)
        }
    }

    const handleChange = level => {
        setLevel(level)
    }

    return (
        <div className="level">
            <h5>Ai Level</h5>
            <Slider
                min={0}
                max={200}
                step={1}
                value={level}
                onChange={handleChange}
                labels={labels}
                tooltip={false}
                onChangeComplete={changeLevel}
                className="slider"
            />
        </div>
    )
}
