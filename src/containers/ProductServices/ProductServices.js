import React from 'react'
import ProductService from '../../components/ProductService/ProductService'
import beauticianImg from './beautician-icon.svg'
import salonChairImg from './salonChair.svg'
import nailPolishingImg from './nail-polish-icon.svg'
import './ProductServices.scss'


export default function ProductServices(props) {
    const services = [
        {
            img: beauticianImg,
            title: 'Expert Beauticians',
            content: 'Beauty Experts dolor sit amet semiadicing elit maecenas sa faub',
            circleStyle: {left: "-25%"},
            alt: "beautician"
        },
        {
            img: salonChairImg,
            title: 'Quality Services',
            content: 'Manicure / Pedicure Services sit amet semiadicing elit maecenas sa fau',
            circleStyle: {left: "-25%"},
            alt: "beautician"
        },
        {
            img: nailPolishingImg,
            title: 'Expert Beauticians',
            content: 'Beauty Experts dolor sit amet semiadicing elit maecenas sa faub',
            circleStyle: {left: "-25%"},
            imgStyle: {width: "100%"},
            alt: "beautician"
        }
    ]

    return (
        <ul className="ProductServices">
            {
                services.map(({img, title, content, ...rest}, i)=>{
                    return(
                        <li key={i}>
                            <ProductService {...rest} productImg={img} productTitle={title} productContent={content}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}
