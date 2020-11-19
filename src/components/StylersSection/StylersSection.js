import React from 'react'
import './StylersSection.scss'
import {stylists} from './stylersData'
import SectionTitle from '../Section Title/SectionTitle'

export default function StylersSection() {
    return (
        <div className="StylersSection">

            <SectionTitle title="Our Stylers"/>

            <div className="stylistsCards">
                {
                    stylists.map(({image, title, name},i) => {
                        
                        return(
                            <div key={i} className='card'>
                                <div className='positionRelative'>
                                    <img src={image} alt="styler"/>
                                    <div className="cardTitle">
                                        <div className="bkg"></div>
                                            <h5>{name}</h5>
                                            <p>{title}</p>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            


        </div>
    )
}
