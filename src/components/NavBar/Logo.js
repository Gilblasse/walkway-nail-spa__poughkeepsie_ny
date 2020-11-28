import React from 'react'
import './Navbar.scss';
import { withRouter } from "react-router";

function Logo({history}) {
    const handleLogoClick = ()=> {
        history.push('/')
    }

    return (
        <div id='Logo' onClick={handleLogoClick}>
            <p>Walkway</p>
            <p className="subHeader">Nail | Spa</p>
        </div>
    )
}

export default withRouter(Logo)