import gameReducer from './game';
import statisticsReducer from './statistics';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    game: gameReducer,
    stats: statisticsReducer,
})

export default allReducers;