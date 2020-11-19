import React from 'react'
import './ServicesPage.scss'
import WrapperContainer from '../WrapperContainer'
import PageTemplate from '../PageTemplate/PageTemplate'
import Hero from '../../components/Hero/Hero'
import ServiceCard from '../../components/ServiceCard/ServiceCard'

import redNailsBkg from './redNailsbkg.jpg'
import pinkToeNailsBkg from './feetPinkNails.jpg'
import { withRouter } from "react-router";
// import nylas from '../../resources/Nylas';
import '../../resources/nylasStyles.css'




function ServicesPage({location,history}) {



    const storeServices = [
        {
            type: "Manicure Style",
            services: [
                {name: "Nails", price:"From 20 to 80 USD"},
                {name: "Nails", price:"From 20 to 80 USD"},
                {name: "Nails", price:"From 20 to 80 USD"},
                {name: "Nails", price:"From 20 to 80 USD"},
            ],
            bkgPic: redNailsBkg
        },

        {
            type: "Pedicure Style",
            services: [
                {name: "Feet", price:"From 20 to 80 USD"},
                {name: "Feet", price:"From 20 to 80 USD"},
                {name: "Feet", price:"From 20 to 80 USD"},
                {name: "Feet", price:"From 20 to 80 USD"},
            ],
            bkgPic: pinkToeNailsBkg
        }
    ]


    
    return (
        <PageTemplate heroElmt={<Hero title="Our Services"/>}>
            <div id="ServicesPage">
                <WrapperContainer className="service-card-wrapper">                    
                    {
                        storeServices.map(({type,services, bkgPic: pic},i) => {
                            const isOdd =  i % 2 === 0

                            return (
                                <ServiceCard key={i} serviceType={type} services={services} isOdd={isOdd} bkgPic={pic}/>
                            )
                        })
                    }
                   
                </WrapperContainer>
            </div>
        </PageTemplate>
    )
}

export default withRouter(ServicesPage)
