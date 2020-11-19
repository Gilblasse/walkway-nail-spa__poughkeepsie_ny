import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import BlockIcon from '@material-ui/icons/Block';
import './SocialMediaIcon.scss'


export default function SocialMediaIcon({type}) {
    type = type.toLowerCase()
    
    const socialIcons = {
        facebook: <FacebookIcon/>,
        instagram: <InstagramIcon/>,
        youtube: <YouTubeIcon/>,
        twitter: <TwitterIcon/>
    }

    return (
        <div className="SocialMediaIcon">
            {
                socialIcons[type] 
                ?  (
                        socialIcons[type] 
                    )
                : <BlockIcon/>
            }
        </div>
    )
}
