import React from 'react'
import Logo from './Logo'
import {links} from './links'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Navbar.scss';

export default function NavBar(props) {
    return (
        <nav className="NavBar">
           <Logo/>
            <ul>
                {
                    links.map((link,i) => (
                        <li key={i}>
                            <a href={link.location}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
            <div>
                <button> 
                    <MoreHorizIcon/> 
                    <span>Book Online</span>
                </button>
            </div>
        </nav>
    )
}
