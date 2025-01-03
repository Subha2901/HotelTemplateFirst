import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import RoomDetails from './Components/RoomDetails/RoomDetails'
import Reviews from './Components/Reviews/Reviews'
import Footer from './Components/Footer/Footer'
import FullWidthTabs from './Components/HotelDetails/HotelDetails'
import AboutUs from './Components/AboutUs/AboutUs'
import ImageGallery from './Components/ImageGallery/ImageGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <FullWidthTabs />
      <AboutUs />
      <ImageGallery />
      {/* <RoomDetails /> */}
      <Reviews />
      <Footer />
    </BrowserRouter>
  )
}

export default App
