import React from 'react'
import Slider from 'react-rangeslider'
import { useSelector, useDispatch } from 'react-redux'
import 'react-rangeslider/lib/index.css'
import { aiPlayDumb, aiPlayMedium, aiPlayHard } from '../actions'

export default function Level() {
    const level = useSelector(state => state.level)
    const dispatch = useDispatch()

    const labels = {
        0: 'Dumb',
        1: 'Meduim',
        2: 'Hard'
    }

    const handleChange = e => {
        switch (e) {
            case 0:
                dispatch(aiPlayDumb())
                break;
            case 1:
                dispatch(aiPlayMedium())
                break;
            case 2:
                dispatch(aiPlayHard())
                break;
            default: break;
        }
    }

    return (
        <div className="level">
            <h5>Ai Level</h5>
            <Slider
                min={0}
                max={2}
                step={1}
                value={level}
                onChange={handleChange}
                labels={labels}
                className="slider"
            />
        </div>
    )
}
