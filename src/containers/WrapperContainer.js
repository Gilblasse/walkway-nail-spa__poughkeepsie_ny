import React from 'react'


export default function WrapperContainer({children, ...rest}) {
    
    const {className, ...remainingStyles} = rest
    const attr = className ? {className} : {}

    const containerStyles = {
        padding: '0 15%',
        ...remainingStyles
    }

    return (
        <div {...attr} style={containerStyles}>
            {children}
        </div>
    )
}
