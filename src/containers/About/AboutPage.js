import React from 'react'
import ActionBtn from '../../components/ActionBtn/ActionBtn'
import Hero from '../../components/Hero/Hero'
import SectionTitle from '../../components/Section Title/SectionTitle'
import PageTemplate from '../PageTemplate/PageTemplate'
import WrapperContainer from '../WrapperContainer'
// import VideoPlayer from '../../components/VideoSection/VideoPlayer'
import VideoPlacemarker from '../../components/VideoSection/VideoPlacemarker'
import StylersSection from '../../components/StylersSection/StylersSection'
import './AboutPage.scss'


export default function AboutPage() {
    return (
        <PageTemplate heroElmt={<Hero title="About Us"/>}>
            <div id="AboutPage" className="Page"> 
                
                <WrapperContainer>
                    <div className="about-section">  
                        <SectionTitle 
                            title={
                                <div id="about-title">
                                    <p>welcome to </p> 
                                    <p>walkway nail spa</p>
                                </div>
                            } 
                            direction="start" 
                            bottomSpace="1pc" 
                            underScoreSpace="12px" 
                            underScoreHeight=".2pc"
                        />

                        <div className="about-description-section">
                            <p className="about-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting.
                            </p>

                            <ActionBtn title="Book Now" />
                        </div>

                    </div>
                </WrapperContainer>
                
                <WrapperContainer>
                    {/* <VideoPlayer className="about-vid"/> */}
                    <div className="about-vid-container">
                        <VideoPlacemarker/>
                    </div>
                </WrapperContainer>


                <WrapperContainer>
                    <StylersSection/>
                </WrapperContainer>

                    
            </div>
        </PageTemplate>
    )
}
