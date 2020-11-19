import React from 'react'
import StylersSection from '../../components/StylersSection/StylersSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import PageTemplate from '../PageTemplate/PageTemplate';
import ProductServices from '../ProductServices/ProductServices';
import WrapperContainer from '../WrapperContainer';
import LookBook from '../../components/LookBook Section/LookBook'
import CouponSection from '../../components/Coupon Section/CouponSection';
import Hero from '../../components/Hero/Hero';


export default function Home() {
    const wrapperSections =[
        {
          element: <VideoSection/>,
          backgroundColor: '#f3f4f6',
          height: 500,
          display: 'flex',
          alignItems: 'center'
        },
        {
          element: <StylersSection/>
        },
        {
            element: <CouponSection/>,
            paddingTop: '60px',
            paddingBottom:'60px'
        },
        {
            element: <LookBook title="Our LookBook"/>
        }
      ]
      
    
    return (
        <div className="App">
           
           <PageTemplate heroElmt={<Hero/>}>
                <div>
                    <div className="product-services-wrapper">
                        <div className="walkwayBkg"></div>
                        <ProductServices/>
                    </div>

                    {
                        wrapperSections.map(({element, ...rest}, i) => (
                            <WrapperContainer key={i} {...rest}>{element}</WrapperContainer>
                        ))
                    } 
                </div>
           </PageTemplate>

        </div>
    );
}
