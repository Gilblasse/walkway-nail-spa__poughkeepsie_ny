import React from 'react'
import WrapperContainer from '../../containers/WrapperContainer'
import SectionTitle from '../Section Title/SectionTitle'
import SocialMediaIcon from '../Social Media Icons/SocialMediaIcon'

import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import PersonPinCircleOutlinedIcon from '@material-ui/icons/PersonPinCircleOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

// import PhoneIcon from '@material-ui/icons/Phone';
// import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

import blkNails from './blkWomanNails.jpg'
import closeUpNails from './closeUpNails.jpg'
import filingNails from './filingNailsOnBlanket.jpg'
import manicurePic from './manicureOnBlanket.jpg'
import pedNailsPic from './pedicureAndNails.jpg'
import nailsPic from './pinkNailsonSheet.jpg'


import './Footer.scss'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

export default function Footer() {
    const links = [
        {name: 'Our Services', link: '/services'},
        {name: 'Book Appointment', link: '/book-appointment'}, 
        {name: 'Privacy Policy', link: '/'}, 
        {name: 'Contact Us', link: '/contact'}, 
    ]
    const nailPics = [blkNails, closeUpNails, filingNails, manicurePic, pedNailsPic, nailsPic]

    return (
        <>
            <WrapperContainer backgroundColor="black">
                <div className="Footer">
                    <Grid container justify="space-between" spacing={3}>
                    
                        {/* COL 1 */}
                        <Grid item xs={4} md={4} lg={3}>
                            <div className="columns col1">
                                <SectionTitle title="ABOUT US" size="14px" direction="start" color="white" bottomSpace="1pc" underScoreSpace="12px" underScoreHeight=".2pc"/>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                    eu fugiat nulla pariatur. 
                                </p>

                                <ul>
                                    <li> <SocialMediaIcon type="Facebook"/> </li>
                                    <li> <SocialMediaIcon type="Instagram"/> </li>
                                    <li> <SocialMediaIcon type="Youtube"/> </li>
                                    <li> <SocialMediaIcon type="Twitter"/> </li>
                                </ul>
                            </div>
                        </Grid>


                        {/* COL 2 */}
                        <Grid item xs={4} md={4} lg={3}>
                            <div className="columns">
                                <SectionTitle title="USEFUL LINKS" size="14px" direction="start" color="white" bottomSpace="1pc" underScoreSpace="12px" underScoreHeight=".2pc"/>
                                <ul className="footer-nav-links">
                                    {
                                        links.map(({name,link}, i) => {
                                            
                                            return (
                                                <li key={i}>
                                                    <Link to={link}>{name}</Link>
                                                </li>
                                            )
                                            
                                        })
                                    }
                                </ul>
                            </div>
                        </Grid>


                        {/* COL 3 */}
                        <Grid item xs={5} md={6} lg={3}>
                            <div className="columns">
                                <SectionTitle title="CONTACT INFO" size="14px" direction="start" color="white" bottomSpace="1pc" underScoreSpace="12px" underScoreHeight=".2pc"/>


                                <ul className="contact-info">
                                    <li> 
                                        <span><AccessTimeOutlinedIcon/></span> 
                                        <p>Mon - Sun    9:00 AM - 8:00 PM</p> 
                                    </li>
                                    <li>
                                        <span><CallOutlinedIcon/></span> 
                                        <p>(+1) 845-337-4278</p> 
                                    </li>
                                    
                                    <li>
                                        <span><PersonPinCircleOutlinedIcon/></span> 
                                        <p>98 Washington St, Poughkeepsie, NY 12601, USA</p>                                
                                    </li>
                                
                                    <li>
                                        <span className="contact-email-logo"><SendOutlinedIcon/></span> 
                                        <p>info@WalkwayNailsSpa.com</p> 
                                    </li>
                                </ul>
                            </div>
                        </Grid>



                        {/* COL 4 */}
                        <Grid item xs={4} md={4} lg={3}>
                            <div className="columns">
                                <SectionTitle title="OUR LOOKBOOK" size="14px" direction="start" color="white" bottomSpace="1pc" underScoreSpace="12px" underScoreHeight=".2pc"/>
                                
                                <ul className="footer-lookbook">
                                    <Grid container spacing={2} justify="center" alignItems="center">
                                        {
                                            nailPics.map((pic, i) => {
                                                return (
                                                    <Grid item xs={6} md={4} className="item-grid">
                                                        <li key={i}>
                                                            <div className="footer-img-container">
                                                                <img src={pic} alt="nail pic"/>
                                                                <div className="img-overlay"></div>
                                                            </div>
                                                        </li>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </ul>
                            </div>
                        </Grid>

                        
                    </Grid>
                </div>
            </WrapperContainer>


            <div className="subfooter" >
                <Grid container spacing={2} justify="center">
                    
                    <Grid item xs={12} md={6}>
                        <p>Copyright &#169; 2020 Walkway Nail Spa All Rights Reserved</p>
                    </Grid>

                    <Grid item xs={12} md={6}> 
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Privacy Policy</li>
                                <li>Our Locations</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </Grid>

                </Grid>
            </div>
        </>
    )
}
