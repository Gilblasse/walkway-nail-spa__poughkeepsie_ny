import React, { useState } from 'react'
import './VideoSection.scss'
import vidPic from './vidPic.jpg'
import VideoPlayer from './VideoPlayer'

export default function VideoPlacemarker({className, imgClass, plyBtnClass}) {

    const [isPlacemarker, setIsPlacemarker] = useState(true)



    return (
        <div className={className} id="VideoPlacemarker" onClick={() => setIsPlacemarker(!isPlacemarker)}>
            {
                isPlacemarker
                ? (
                    <>
                        <img className={imgClass} src={vidPic} alt="vid poster"/>
                        <div className="overlay"></div>
                        
                        <div className={`playBtn-container ${plyBtnClass}`}>
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>

                            <div className="plybtn">
                                <div className="line line-top"></div>
                                <div className="line line-bottom"></div>
                                <div className="line line-end"></div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <VideoPlayer className="vidPlayer-wrapper"/>
                )
            }
            
        </div>
    )
}
