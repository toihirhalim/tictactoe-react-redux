import gameReducer from './game';
import statisticsReducer from './statistics';
import isAiPlayingReducer from './isAiPlaying';
import levelReduicer from './level'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    game: gameReducer,
    statistics: statisticsReducer,
    isAiPlaying: isAiPlayingReducer,
    level: levelReduicer
})

export default allReducers;