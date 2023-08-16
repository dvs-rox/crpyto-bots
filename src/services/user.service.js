export const userService = {
    getUser,
}

async function getUser() {
    return {
        name: 'test',
        coins: 100,
        moves: []
    }
}