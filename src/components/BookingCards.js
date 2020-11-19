import React from 'react'
import WrapperContainer from '../containers/WrapperContainer'
import BookingCard from './BookingCard/BookingCard'
import './Styles/BookingCards.scss'

export default function BookingCards({nailTechs, setBookingCal}) {
    return (
        <WrapperContainer>
            <div className="booking-cards">
                {
                    nailTechs.map((tech, i) => <BookingCard key={i} onClick={() => setBookingCal(tech)} nailTech={tech}/>)
                }
            </div>
        </WrapperContainer>
    )
}
