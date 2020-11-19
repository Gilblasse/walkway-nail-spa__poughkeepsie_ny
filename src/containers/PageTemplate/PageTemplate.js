import React from 'react'
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar'

export default function PageTemplate({children,heroElmt}) {
    return (
        <div>
            <NavBar/>
            {heroElmt}
            {children}

            <Footer/>
        </div>
    )
}
