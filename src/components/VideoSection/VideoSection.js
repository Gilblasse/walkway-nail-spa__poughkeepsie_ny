import React from 'react'
import ActionBtn from '../ActionBtn/ActionBtn'
import VideoPlacemarker from './VideoPlacemarker'
// import VideoApp from './VideoPlayer'
import './VideoSection.scss'
import auth_url from '../../resources/Nylas'


export default function VideoSection(props) {

    
    
    return (
        <div id="VideoSection">
            <div className="vid-col1">
                <h2>Make Your</h2>
                <h2>Own Momentum</h2>

                <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>

                <ActionBtn title="Read More" className=""/>
            </div>

            <div className="vid-col2">
                <VideoPlacemarker className="vid-wrapper" imgClass="vid-img" plyBtnClass="vid-play-button"/>
            </div>
        </div>
    )
}
