const isOnlineModeReduicer = (state = false, action) => {
    switch (action.type) {
        case "ONLINE":
            return true
        case "OFFLINE":
            return false
        default:
            return state
    }
}

export default isOnlineModeReduicer;