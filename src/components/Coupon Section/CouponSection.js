import React from 'react'
import ActionBtn from '../ActionBtn/ActionBtn'
import './CouponSection.scss'

export default function CouponSection() {
    return (
        <section id="CouponSection">
            <div className="coupon-content">
                <p>Color Day Offer!</p>
                <h3>
                    <p>
                        <span className="coupon-precentage">-10%</span> on haircut
                    </p>
                    <p> Color and Highlight </p>
                </h3>

                <ActionBtn title="Book Appointment"/>
            </div>
        </section>
    )
}
