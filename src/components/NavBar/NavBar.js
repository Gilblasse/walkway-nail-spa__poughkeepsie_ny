import React, {useEffect, useState} from 'react'
import Logo from './Logo'
import {links} from './links'
import './Navbar.scss';
import ActionBtn from '../ActionBtn/ActionBtn';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useRecoilState } from 'recoil';
import { menuOpenState } from '../../globalState';




function NavBar({history, match}) {

    const [isMenuOpen, setIsMenuOpen] = useRecoilState(menuOpenState)
    
    const handleClick = ()=> history.push('/book-appointment')

    const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

    

    return (
        <nav className="NavBar">
           <Logo/>

            <ul>
                {
                    links.map(({name, location},i) => (
                        <li key={i} className={match.path === location && "active"}>
                            <Link to={location}>{name}</Link>
                            <div className="underline"></div>
                        </li>
                    ))
                }
            </ul>
            
            <div onClick={handleClick}>
                <ActionBtn title="BOOK ONLINE" className="nav-action-btn"/>
            </div>

            <div className="hamburger-menu" onClick={handleMenuOpen}>
                <svg viewBox="0 0 100% 12" width="100%" height="12px">
                    <path />
                    <path />
                    <path />
                </svg>
            </div>

        </nav>
    )
}

export default withRouter(NavBar)