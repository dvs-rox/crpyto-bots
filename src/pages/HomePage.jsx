import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { store } from "../store/store"

export function HomePage({ latestPrice, user }) {
    const navigate = useNavigate()
    
    useEffect(() => {
        console.log("🚀 ~ file: HomePage.jsx:10 ~ useEffect ~ user:", user)
        if (!user._id) navigate('/login')
    }, [user])
    return (
        <main className="home-page">
            <section className="user-card">
                <h2>{user.name ? user.name : ''}</h2>
                <img src={`https://robohash.org/${user.username}.png`} />
                <div>
                    <h3>Current bitcoin rate</h3>
                    <span>{latestPrice ? latestPrice : ''}</span>
                </div>
            </section>

        </main>
    )
}