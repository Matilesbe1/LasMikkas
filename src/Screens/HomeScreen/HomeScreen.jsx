import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import AppHeader from '../../Components/AppHeader/AppHeader.jsx'
import ImageSlider from '../../Components/Hero/ImageSlider.jsx'
import OptionsButtons from '../../Components/OptionsButtons/OptionsButtons.jsx'
import Sheets from '../../Components/Sheets/sheets.jsx'
import FooterSection from '../../Components/FooterSection/FooterSection.jsx'
import Productos from '../../Components/Cart/Productos.jsx'
import Cart from '../../Components/Cart/Cart.jsx'

const HomeScreen = () => {

    return (
        <div>
            <AppHeader />
            <ImageSlider />
            <OptionsButtons />
            <Sheets />
            <FooterSection />
        </div>
    )
}

export default HomeScreen
