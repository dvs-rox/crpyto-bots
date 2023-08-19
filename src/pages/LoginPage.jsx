import { login } from "../store/actions/user.actions"
import { useNavigate } from "react-router-dom"
export function LoginPage() {
    const navigate = useNavigate()
    async function onLogin(ev) {
        ev.preventDefault()
        const username = ev.target.username.value
        const password = ev.target.password.value
        try {
            const res = await login({ username, password })
            console.log("🚀 ~ file: LoginPage.jsx:11 ~ onLogin ~ res:", res)
            if (res) navigate('/')
            else{
                alert('Wrong username or password')
            }

        } catch (err) {
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