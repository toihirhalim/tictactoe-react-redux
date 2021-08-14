const isAiPlayingReducer = (state = true, action) => {
    switch (action.type) {
        case 'HUMAIN':
            return false
        case 'AI':
            return true
        default:
            return state
    }
}

export default isAiPlayingReducer;