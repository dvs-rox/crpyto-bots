import { useState, useEffect } from 'react'
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { ContactEditPage } from './pages/ContactEditPage'
import { userService } from "./services/user.service"
import { bitcoinService } from "./services/bitcoin.service"
import { ContactDetails } from './components/ContactDetails'
import { AppHeader } from './components/AppHeader'
import { Statistics } from './pages/Statistics'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
function App() {
  const [user, setUser] = useState(null)
  const [latestPrice, setLatestPrice] = useState(null)
  useEffect(() => {
    loadUser()
    setLatestMarketPrice()
  }, [])
  async function loadUser() {
    try {
      const user = await userService.getUser()
      setUser(user)
    } catch (err) {
      console.log('cannot load user', err)
    }
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
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactPage />} >
              <Route path=':id' element={<ContactDetails />} />
              <Route path='edit/:id?' element={<ContactEditPage />} />
            </Route >
            <Route path='/stats' element={<Statistics />} />
          </Routes>
        </main>
      </section>
    </Router>

  )
}

export default App
