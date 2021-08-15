import gameReducer from './game';
import statisticsReducer from './statistics';
import isAiPlayingReducer from './isAiPlaying';
import levelReduicer from './level'
import isOnlineModeReduicer from './isOnlineMode';
import authReduicer from './auth'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    game: gameReducer,
    statistics: statisticsReducer,
    isAiPlaying: isAiPlayingReducer,
    level: levelReduicer,
    isOnlineMode: isOnlineModeReduicer,
    auth: authReduicer
})

export default allReducers;