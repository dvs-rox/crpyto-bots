import { Link, NavLink } from 'react-router-dom'
import { logout } from '../store/actions/user.actions.js'

export function AppHeader({ user }) {
    function onLogOut() {
        logout()
    }
    return (
        <header className='app-header' id='Header'>
            <section className='container'>
                <h1>
                    BitcoinBots
                </h1>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                    <NavLink to='/stats'>Statistics</NavLink>

                    {!user ? (
                        <>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/signup'>Signup</NavLink>
                        </>
                    ) : (
                        <button onClick={onLogOut}>Logout</button>
                    )


                    }

                </nav>
            </section>
        </header>
    )
}