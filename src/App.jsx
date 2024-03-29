import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import About from './components/About'
import Ubication from './components/Ubication'
import Index from './components/Index';
import Footer from './components/Footer';
import Header from './components/Header';
import { ScrollTop } from './components/ScrollTop';

function App() {
  return (
    <Router>
      <Routes>
        {/* index */}
        <Route path='/' element={<main className='container' style={{
          width: '100%',
        }}>
          <Index />
          <Footer />
        </main>} />
        {/* about */}
        <Route path="/About" element={<main style={{
          background: 'linear-gradient(#032a63, #131922,#1B2024,#1B2024)'
        }}>
          <ScrollTop />
          <Header />
          <About />
          <Footer />
        </main>
        } />
        {/* Ubication */}
        <Route path="/Ubication" element={
          <main style={{
            background: 'linear-gradient(#2222cc, #131922,#1B2024,#1B2024)'
          }}>
            <ScrollTop />
            <Header />
            <Ubication />
            <Footer />
          </main>}
        />
      </Routes>
    </Router >


  )
}

export default App
