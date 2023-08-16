import { useState, useEffect } from 'react'
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { userService } from "./services/user.service"
import { bitcoinService } from "./services/bitcoin.service"
import { ContactDetails } from './components/ContactDetails'
import { AppHeader } from './components/AppHeader'
import { Statistics } from './pages/Statistics'
function App() {
  const [user, setUser] = useState(null)
  const [latestPrice, setLatestPrice] = useState(null)
  useEffect(() => {
    loadUser()
    setLatestMarketPrice()
  }, [])
  async function loadUser() {
    const user = await userService.getUser()
    setUser(user)
  }
  async function setLatestMarketPrice() {
    try {
      const data = await bitcoinService.getMarketPrice()
      const latestPrice = data.values[data.values.length - 1]
      setLatestPrice(latestPrice.y)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Router>
      <section className='main-app'>
        <AppHeader />
        <main className='container'>
          <Routes>
            <Route path='/' element={<HomePage user={true} latestPrice={latestPrice} />} />
            <Route path='/contacts' element={<ContactPage />} >
              <Route path=':id' element={<ContactDetails />} />
            </Route >
            <Route path='/stats' element={<Statistics />} />
          </Routes>
        </main>
      </section>
    </Router>

  )
}

export default App
