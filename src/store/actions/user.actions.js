import { store } from '../store';

export async function signUp(user) {
    try {
        store.dispatch({ type: 'SIGNUP', user })
    } catch (err) {
        console.log(err)
    }
}

export async function setLoggedInUser(user) {
    try {
        store.dispatch({ type: 'LOGIN', user })
    } catch (err) {
        console.log(err)
    }
}