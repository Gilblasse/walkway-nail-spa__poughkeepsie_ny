import React from 'react';


export default function VideoApp({className}) {

    const vidURL = "https://www.youtube-nocookie.com/embed/N7hCLeHML1Q"
    const src =`${vidURL}?autoplay=1&showinfo=0&rel=0&fs=0&color=white&autohide=0&disablekb=1`

    return (
        <iframe 
            src={src}
            width="100%" 
            height="100%" 
            frameBorder="0"
            allow="autoplay"
            title="nail spa"
            >
        </iframe>
    );
}
