import React from 'react'
import './ProductService.scss'
import ServiceIcon from './ServiceIcon/ServiceIcon'


export default function ProductService({productImg, productTitle, productContent, ...rest}) {
    return (
        <div className="ProductService">
            <ServiceIcon svgImg={productImg} {...rest}/>
            
            <div className="ProductService__content-wrapper">
                <h3>{productTitle}</h3>
                <p>{productContent}</p>
            </div>
        </div>
    )
}
