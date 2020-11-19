import React from 'react'
import Hero from '../../components/Hero/Hero'
import PageTemplate from '../PageTemplate/PageTemplate'
import WrapperContainer from '../WrapperContainer'
import LookBook from '../../components/LookBook Section/LookBook'
import './LookBookPage.scss'

export default function LookBookPage() {
    return (
        <PageTemplate heroElmt={<Hero title="Our LookBook"/>}>
            <div id="LookBookPage">  
                <WrapperContainer>
                    
                    <LookBook/>

                </WrapperContainer>
            </div>
        </PageTemplate>
    )
}
