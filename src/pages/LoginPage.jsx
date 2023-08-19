import { setLoggedInUser } from "../store/actions/user.actions"

export function LoginPage(){
    async function onLogin(ev){
        ev.preventDefault()
        const username = ev.target.username.value
        const password = ev.target.password.value
        try{
            await setLoggedInUser({username,password})
        }catch(err){
            console.log(err)
        }
    }
    return (
        <section className="login-page">
            <h1>Login</h1>
            <form onSubmit={onLogin}>
                <label htmlFor="name">Username</label>
                <input type="text" id="name" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
            </form>
        </section>
    )
}