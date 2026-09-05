import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { PortfolioLanding } from './Pages/PortfolioLanding';
import { ContactMe } from './Pages/ContactMe';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<PortfolioLanding />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Routes>
    </>
  )
}

export default App