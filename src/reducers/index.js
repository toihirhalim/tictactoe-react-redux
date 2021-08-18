import gameReducer from './game';
import statisticsReducer from './statistics';
import isAiPlayingReducer from './isAiPlaying';
import levelReduicer from './level'
import isOnlineModeReduicer from './isOnlineMode';
import authReduicer from './auth'
import playerReduicer from './player'

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    game: gameReducer,
    statistics: statisticsReducer,
    isAiPlaying: isAiPlayingReducer,
    level: levelReduicer,
    isOnlineMode: isOnlineModeReduicer,
    auth: authReduicer,
    player: playerReduicer
})

export default allReducers;