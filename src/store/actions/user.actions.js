import { store } from '../store';
import { userService } from '../../services/user.service';
export async function signUp(user) {
    console.log("🚀 ~ file: user.actions.js:4 ~ signUp ~ user:", user)
    try {
        store.dispatch({ type: 'SIGNUP', user })
    } catch (err) {
        console.log(err)
    }
}

export async function login(credentials) {
    try {
        const isCorrect = await userService.checkCredentials(credentials)
        console.log("🚀 ~ file: user.actions.js:15 ~ login ~ isCorrect:", isCorrect)
        if (isCorrect) {
            const user = await userService.getUserByUsername(credentials.username)
            store.dispatch({ type: 'LOGIN', user })
            return true
        } else return false
    } catch (err) {
        console.log(err)
    }
}

export function logout() {

}

export function getState() {
    return store.getState()
}

