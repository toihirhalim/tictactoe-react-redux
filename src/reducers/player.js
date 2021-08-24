const playerReduicer = (state = {}, action) => {
    switch (action.type) {
        case 'PLAYER':
            return { id: action.id, username: action.username }
        case 'CLEAR':
            return {}
        default:
            return state
    }
}

export default playerReduicer;