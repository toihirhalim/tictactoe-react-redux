import boardReducer from './board';
import statisticsReducer from './statistics';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    board: boardReducer,
    stats: statisticsReducer,
})

export default allReducers;