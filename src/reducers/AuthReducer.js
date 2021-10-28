export const AuthReducer = (state, action) => {
    const {
        type,
        payload: {isAuthenticated, username}
    } = action

    switch(type){
        case 'SET_AUTH':
            return {
                ...state, 
                authLoading: false,
                isAuthenticated,
                username
            }
        default:
            return state
    }
} 