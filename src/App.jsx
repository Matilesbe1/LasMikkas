import React from 'react'
import ImageSlider from './Components/Hero/ImageSlider.jsx'
import OptionsButtons from './Components/OptionsButtons/OptionsButtons.jsx'
import FooterSection from './Components/FooterSection/FooterSection.jsx'
import Sheets from './Components/Sheets/sheets.jsx'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import CartScreen from './Screens/CartScreen/CartScreen.jsx'
import ProductsScreen from './Screens/ProductsScreen/ProductsScreen.jsx'
import HomeScreen from './Screens/HomeScreen/HomeScreen.jsx'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/cart' element={<CartScreen />}></Route>
        <Route path='/productos/:category' element={<ProductsScreen/>}></Route>
      </Routes>

    </>
  )
}

export default App
