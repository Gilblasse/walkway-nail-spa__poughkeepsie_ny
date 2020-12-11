import React from 'react'
import './StylersSection.scss'
import {stylists} from './stylersData'
import SectionTitle from '../Section Title/SectionTitle'
import { Grid } from '@material-ui/core'

export default function StylersSection() {
    return (
        <div className="StylersSection">

            <SectionTitle title="Our Stylers"/>

            <div className="stylistsCards">
                <Grid container justify="center" spacing={7}>
                    {
                        stylists.map(({image, title, name},i) => {
                            
                            return(
                                <Grid item xs={12} md={4} lg={4}>
                                    <div key={i} className='card'>
                                        <div className='positionRelative'>
                                            <img src={image} alt="styler"/>
                                            <div className="cardTitle">
                                                <div className="bkg"></div>
                                                    <h5>{name}</h5>
                                                    <p>{title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            )

                        })
                    }
                </Grid>
            </div>
            


        </div>
    )
}
