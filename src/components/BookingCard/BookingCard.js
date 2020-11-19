import React from 'react'
import './BookingCard.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function BookingCard({nailTech:{name, image, title,link}, setBookingCal}) {

    return ( 
        <div className="BookingCard" onClick={()=> setBookingCal({name,link})}>
            <div className="card-container">
                <div className="profile-container">
                    <img src={image} alt={name}/>
                </div>

                <div className="profile-info">
                    <p>{name}</p>
                    <p>{title}</p>
                </div>
            </div>
            

            <div className="arrow-container">
                <ChevronRightIcon />
            </div>
        </div>
    )
}
