import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Navbar/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './assets/Components/pages/Home'
import AboutUs from './assets/Components/pages/AboutUs'
import TourPackages from './assets/Components/pages/TourPackages'
import Destination from './assets/Components/pages/Destination'
import Gallery from './assets/Components/pages/Gallery'
import ContactUs from './assets/Components/pages/ContactUs'

const App = () => {
  return (
    <div>
       <Navbar />

       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/tour-packages' element={<TourPackages />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/contact-us' element={<ContactUs />} />
       </Routes>

      <Footer />

    </div>
  )
}

export default App