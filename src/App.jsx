import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/Firebase'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import SignupForm from './component/SignupForm'
import Login from './component/Login'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import AllNews from './component/AllNews'


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          email: currentUser.email,
          uid: currentUser.uid,
        })
      } else {
        setUser(null)
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Static Navbar */}
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar user={user} />
        </header>

        {/* Scrollable main content */}
        <main className="flex-1 mt-[72px] mb-[72px] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element= {<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path='/allnews' element={<AllNews/>} />
          </Routes>
        </main>

        {/* Static Footer */}
        <footer className="fixed bottom-0 left-0 w-full z-50">
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App
