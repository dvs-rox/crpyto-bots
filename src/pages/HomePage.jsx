

export function HomePage({ latestPrice, user }) {
    if (!user) return <div>Loading...</div>
    return (
        <main className="home-page">
            <section className="user-card">
                <h2>{user.name ? user.name : ''}</h2>
                <img src={`https://robohash.org/${user.name}.png`} />
                <div>
                    <h3>Current bitcoin rate</h3>
                    <span>{latestPrice ? latestPrice : ''}</span>
                </div>
            </section>

        </main>
    )
}