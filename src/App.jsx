import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import About from './components/About'
import Ubication from './components/Ubication'
import Index from './components/Index';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <Routes>
        {/* index */}
        <Route path='/' element={<main className='container' style={{
          background: 'linear-gradient(#1b2024cc, #1b20241f),url(/img/index.jpeg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
        }}>
          <Index />
          <Footer />
        </main>} />
        {/* about */}
        <Route path="/About" element={<About />} />
        {/* Ubication */}
        <Route path="/Ubication" element={
          <main style={{
            background: 'black',
            height: '100vh',
          }}>
            <Ubication />
            <Footer />
          </main>} />
      </Routes>
    </Router >


  )
}

export default App