import { userService } from '../../services/user.service.js'

const initialState = {
    loggedInUser: {
        name: '',
        id_: null,
        coins: 0,
        moves: []
    }
}

export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SIGNUP':
            try {
                return userService.signUp(action.user)
            }
            catch (err) {
                console.log(err)
            }
        case 'LOGIN':
            return { ...state, loggedInUser: action.user }
        case 'LOGOUT':
            return { ...state, loggedInUser: null }
        default:
            return state
    }
}
