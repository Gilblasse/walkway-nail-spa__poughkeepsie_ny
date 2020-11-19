import React from 'react'
import './SectionTitle.scss'

export default function SectionTitle({title,size,color,direction, bottomSpace, underScoreSpace, underScoreHeight}) {
    
    const titleStyles = {
        wrapper:{ alignItems: direction, marginBottom: bottomSpace},

        h3: { fontSize: size, color},

        hr: { backgroundColor: color, marginTop: underScoreSpace, height: underScoreHeight}
    }


    return (
        <div style={titleStyles.wrapper} className="SectionTitle">
            <h3 style={titleStyles.h3}> {title} </h3>
            <hr style={titleStyles.hr}/>
        </div>
    )
}
