import {signUp} from '../store/actions/user.actions'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export function SignupPage() {
    //TODO add is logged in check
    const [user, setUser] = useState({ username: '', password: '' })
    const navigate = useNavigate()
    async function onSignup(ev) {
        ev.preventDefault()
        try {
            await signUp(user)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }
    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        setUser(prevState => ({ ...prevState, [field]: value }))
    }
    const { username, password } = user
    return (
        <section className="signup-page">
            <h1>Signup</h1>
            <form onSubmit={onSignup}>
                <label htmlFor="name">Username</label>
                <input type="text" id="username" name="username" value={username} onChange={handleChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={handleChange} />
                <button type="submit">Signup</button>
            </form>
        </section>

    )
}