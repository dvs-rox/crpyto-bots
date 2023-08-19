import { storageService } from "../services/async-storage.service"
import { makeId } from '../utils/utils.js'

const USER_KEY = 'userDB'
const LOGGED_IN_USER_KEY = 'loggedInUser'
export const userService = {
    getUser,
    getUserByUsername,
    signUp,
    addMove,
    checkCredentials
}

async function getUser(userId) {
    try {
        const user = await storageService.get(USER_KEY, userId)
        return user
    } catch (err) {
        console.log(err)
    }
}
async function getUserByUsername(username) {
    try {
        const users = await storageService.query(USER_KEY)
        const user = users.find(user => user.username === username)
        return user
    } catch (err) {
        console.log(err)
    }
}
async function signUp({ username, password }) {
    console.log("🚀 ~ file: user.service.js:22 ~ signUp ~ password:", password)
    console.log("🚀 ~ file: user.service.js:22 ~ signUp ~ username:", username)
    try {
        const user = {
            _id: makeId(),
            username,
            password,
            coins: 100,
            moves: []
        }
        await storageService.post(USER_KEY, user)
        return user
    } catch {
        console.log('error')
    }
}
async function addMove(fromId, toId, amount) {
    try {
        const fromUser = await storageService.get(USER_KEY, fromId)
        const toUser = await storageService.get(USER_KEY, toId)
        fromUser.coins -= amount
        toUser.coins += amount
        fromUser.moves.unshift({ toId, to: toUser.username, at: Date.now(), amount })
        await storageService.put(USER_KEY, fromUser)
        await storageService.put(USER_KEY, toUser)
        return { fromUser, toUser }
    } catch (err) {
        console.log(err)
    }
}
async function checkCredentials({username,password}){
    try {
        const users = await storageService.query(USER_KEY)
        const user = users.find(user => user.username === username && user.password === password)
        if (!user) return false
        return true
    } catch (err) {
        console.log(err)
    }
}