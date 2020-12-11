import { Grid } from '@material-ui/core'
import React from 'react'
import ActionBtn from '../../components/ActionBtn/ActionBtn'
import Hero from '../../components/Hero/Hero'
import StoreMap from '../../components/Map/StoreMap'
import SectionTitle from '../../components/Section Title/SectionTitle'
import PageTemplate from '../PageTemplate/PageTemplate'
import WrapperContainer from '../WrapperContainer'
import './ContactPage.scss'

export default function ContactPage() {

    const handleSubmit = (e)=> {
        e.preventDefault()
        console.log("submitting Form")
    }



    return (
        <PageTemplate heroElmt={<Hero title="Contact"/>}>
            <div id="ContactPage">  
                <WrapperContainer padding="10pc 15% 5pc">
                    
                    <div className="map-wrapper">
                        <StoreMap/>
                    </div>

                    <div className="contact-wrapper">
                        <div className="contact-img-box-contanier">
                            box-img
                        </div>
                        <div className="contact-form-container">
                           <SectionTitle title="Drop Us A Line" direction="flex-start" bottomSpace="4pc"/>

                           <form onSubmit={handleSubmit}>

                                <fieldset className="field-section-double">
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <p className="field-section">
                                                <label htmlFor="user-first-name">Name*</label>
                                                <input id="user-first-name"/>
                                            </p>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <p className="field-section">
                                                <label htmlFor="user-email">Email*</label>
                                                <input id="user-email"/>
                                            </p>
                                        </Grid>
                                    </Grid>
                                   
                                </fieldset>


                                <fieldset className="field-section-double">
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={6}>
                                            <p className="field-section">
                                                <label htmlFor="user-phone-number">Phone*</label>
                                                <input id="user-phone-number"/>
                                            </p>
                                        </Grid>

                                        <Grid item xs={12} sm={6}>
                                            <p className="field-section">
                                                <label htmlFor="user-subject">Subject*</label>
                                                <input id="user-subject"/>
                                            </p>
                                        </Grid>
                                   </Grid>
                                </fieldset>
                                
                                <fieldset className="field-section-message">
                                    <label htmlFor="user-message">Your Message*</label>
                                    <div>
                                        <textarea className="user-message" id="user-message" rows="8"></textarea>
                                    </div>
                                </fieldset>
                                
                                <div>
                                    <ActionBtn title="Send Message" className="submit-btn"/>
                                </div>
                            </form>
                        </div>
                    </div>

                </WrapperContainer>
            </div>
        </PageTemplate>
    )
}
