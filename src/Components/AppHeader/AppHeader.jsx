import React from 'react'
import './AppHeader.css'

const AppHeader = () => {
    return (
        <div className='app-header-container'>
            <button className='search-button'><i className="bi bi-search"></i></button>
            <a href="/"><button className='title'>LasMikkas</button></a>
            <div className='right-options'>
                <button className='profile-button'><i className="bi bi-person"></i></button>
                <a href="/cart"><button className='cart-button'><i className="bi bi-cart2"></i></button></a>
            </div>
        </div>
    )
}

export default AppHeader
