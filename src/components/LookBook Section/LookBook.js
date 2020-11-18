import React from 'react'
import SectionTitle from '../Section Title/SectionTitle'
import './LookBook.scss'

// import designNails from './designecologist-r-Ej0NQmFlQ-unsplash.jpg'
import pinkNails from './pinkNails.jpg'
import peachNails from './peachNails.jpg'
import brownNails from './brownNails.jpg'

import blackNails from './blackNails.jpg'
import handsUp from './hands-up-black-nails.jpg'
import profileWNails from './pinkNails-w-profile.jpg'




export default function StylersSection({title}) {
    return (
        <div className="LookBook">
            {title && <SectionTitle title={title}/>}
            
            <div className="lookbook-wrapper">
                <div className="top-left-container">
                    <img className="lookbook-nails-img" src={pinkNails} alt="pink nails"/> 
                </div>


                <div className="top-center-container">
                    <img className="lookbook-nails-img" src={peachNails} alt="pink nails"/>
                </div>


                <div className="top-right-container">
                    <img className="lookbook-nails-img" src={brownNails} alt="brown nails"/>
                </div>


                <div className="bottom-left-container">
                    <img className="lookbook-nails-img" src={blackNails} alt="black nails"/>
                </div>
                

                <div className="bottom-center-container">
                    <img className="lookbook-nails-img" src={profileWNails} alt="designer nails"/> 
                    <div className="overlay-wrapper"></div>

                    {/* CROSS ICON  */}
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div>


                <div className="bottom-right-container">
                    <img className="lookbook-nails-img" src={handsUp} alt="hands up black nails"/>
                </div>
            </div>
        </div>
    )
}
