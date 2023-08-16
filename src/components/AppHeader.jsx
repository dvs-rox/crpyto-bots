import {Link, NavLink} from 'react-router-dom'

export function AppHeader(props){
    const headerAttrs = {className: 'app-header',id:'Header'}
    return(
        <header {...headerAttrs}>
            <section className='container'>
                <h1>
                    BitcoinBots
                </h1>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                    <NavLink to='/stats'>Statistics</NavLink>
                </nav>
            </section>
        </header>
    )
}