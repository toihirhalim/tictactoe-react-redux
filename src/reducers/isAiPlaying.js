const isAiPlayingReducer = (state = true, actiion) => {
    switch (actiion.type) {
        case 'HUMAIN':
            return false
        case 'AI':
            return true
        default:
            return state
    }
}

export default isAiPlayingReducer;