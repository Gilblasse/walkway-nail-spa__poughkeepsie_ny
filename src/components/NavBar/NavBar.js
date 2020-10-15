import React from 'react'
import Logo from './Logo'
import {links} from './links'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Navbar.scss';
import ActionBtn from '../ActionBtn/ActionBtn';

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
                <ActionBtn title="BOOK ONLINE" className="nav-action-btn"/>
            </div>
        </nav>
    )
}
