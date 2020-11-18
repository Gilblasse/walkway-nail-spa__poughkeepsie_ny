import React from 'react'
import Logo from './Logo'
import {links} from './links'
import './Navbar.scss';
import ActionBtn from '../ActionBtn/ActionBtn';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";


function NavBar({history}) {

    const handleClick = ()=> {
        // console.log({id: process.env.REACT_APP_NYLAS_CLIENT_ID})
        console.log({history})
        history.push('/book-appointment')
    }


    return (
        <nav className="NavBar">
           <Logo/>
            <ul>
                {
                    links.map(({name, location},i) => (
                        <li key={i}>
                            <Link to={location}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
            <div onClick={handleClick}>
                <ActionBtn title="BOOK ONLINE" className="nav-action-btn"/>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)