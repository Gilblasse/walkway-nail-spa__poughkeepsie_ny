import React from 'react'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import './Actionbtn.scss'


export default function ActionBtn({title, className, href}) {

    return (
        <button className={className} > 
                <MoreHorizIcon/> 
                <span>{title}</span>
        </button>
    )
}
