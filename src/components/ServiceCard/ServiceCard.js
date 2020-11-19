import React from 'react'
import ActionBtn from '../ActionBtn/ActionBtn'
import './ServiceCard.scss'



export default function ServiceCard({serviceType, services, bkgPic, isOdd}) {

    
    return (
        <div className="Service-card">
            <div className="img-container">
                <img src={bkgPic} alt="background"/>
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
                <p>{serviceType}</p> 
                <p>Services</p>
                <ActionBtn title="Book Now"/>
            </div>


            {/* --------- SERVICE PRICES -------- */}
            <div className="service-prices-wrapper" style={ { justifyContent: isOdd ? "flex-start" : "flex-end" } }>
                <div className="service-prices">
                    {
                        services.map(({name, price}, i) =>{
                            return (
                                <div key={i} className="service-price">
                                    <p className="service">{name}</p>
                                    <p className="price">{price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
