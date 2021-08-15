const auth = {
    isLogged: false,
    token: null
}

const authReducer = (state = auth, action) => {
    switch (action.type) {
        case 'LOGIN': return { isLogged: true, token: action.token }
        case 'LOGOUT': return { isLogged: false, token: null }
        case 'TOKEN': return { ...state, token: action.token }
        default: return state
    }
}

export default authReducer;