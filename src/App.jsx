// import { useState } from 'react'
import { Outlet } from 'react-router-dom';
// import { Header, Footer } from './components';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css'

function App() {
  return(
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
