import React from 'react'
import './ServiceIcon.scss'

export default function ServiceIcon({svgImg, imgStyle, alt, circleStyle}) {
    return (
        <div className="ServiceIcon">
            
            <div style={circleStyle ? circleStyle : {}} className="circle">
                <img src={svgImg} style={imgStyle ? imgStyle : {}} className="svgImg" alt={alt}/>  
            </div>
           
        </div>
    )
}
