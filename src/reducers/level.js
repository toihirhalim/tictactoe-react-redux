const levelReduicer = (state = 1, action) => {
    switch (action.type) {
        case 'DUMB':
            return 0
        case 'MEDUIM':
            return 1
        case 'HIGH':
            return 2
        default:
            return state
    }
}

export default levelReduicer;