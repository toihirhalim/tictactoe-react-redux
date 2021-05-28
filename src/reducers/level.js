const levelReduicer = (state = 1, action) => {
    switch (action.type) {
        case 'DUMB':
            return 0
        case 'MEDIUM':
            return 1
        case 'HARD':
            return 2
        default:
            return state
    }
}

export default levelReduicer;