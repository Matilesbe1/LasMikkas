import React from 'react'
import './OptionsButtons.css'

const OptionsButtons = () => {
    return (
        <div className='options-container'>
            <div>
                <a href="/productos/collares"><button className='img-button'><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780069144/IMG_6155_k7qeno.jpg" alt="" /><span className='img-text'>COLLARES</span></button></a>
            </div>
            <div>
                <a href="productos/pulseras"><button className='img-button'><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780068801/IMG_8932_yw95ds.jpg" alt="" /><span className='img-text'>PULSERAS</span></button></a>
            </div>
            <div>
                <a href="productos/aros"><button className='img-button aros'><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780438560/IMG_8897_sd3lla.jpg" alt="" /><span className='img-text'>AROS</span></button></a>
            </div>
            <div>
                <a href="productos/anillos"><button className='img-button'><img src="https://res.cloudinary.com/dcijxubv9/image/upload/v1780438551/IMG_6208_i642il.jpg" alt="" /><span className='img-text'>ANILLOS</span></button></a>
            </div>
        </div>
    )
}

export default OptionsButtons
