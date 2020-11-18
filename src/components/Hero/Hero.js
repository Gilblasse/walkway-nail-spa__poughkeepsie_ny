import React from 'react'
import ActionBtn from '../ActionBtn/ActionBtn'
import './Hero.scss'

export default function Hero() {
    return (
        <section id="Hero">
            <div className="hero-inner-wrapper">
                <div className="hero-main">
                    <p>Blonde <span>& Highlight</span></p>
                    <p>Divide Your Uniqness By Your Hair In Style</p>
                    <ActionBtn title="OUR SERVICES" className="hero-action-btn"/>
                </div>

                <aside className="store-hours">
                    Mon - Sun : 7:00AM - 8:00PM
                </aside>
            </div>

            <div className='custom-shape-divider-bottom'>
                <svg width="1440" height="224" viewBox="0 0 1440 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 52.4999L0.221252 50.0097L-2.5 49.7679V52.4999V224V226.5H0H1440H1442.45L1442.5 224.046L1440 224C1442.5 224.046 1442.5 224.044 1442.5 224.042L1442.5 224.031L1442.5 223.987L1442.5 223.812L1442.52 223.125L1442.56 220.458C1442.61 218.13 1442.67 214.734 1442.74 210.461C1442.89 201.915 1443.1 189.862 1443.33 175.832C1443.79 147.774 1444.35 111.807 1444.72 80.1803C1445.09 48.5805 1445.27 21.245 1444.99 10.4958C1444.96 9.14793 1444.92 8.03583 1444.86 7.19713C1444.84 6.77943 1444.81 6.40626 1444.77 6.09435C1444.74 5.84332 1444.69 5.44107 1444.58 5.07752C1444.54 4.97241 1444.48 4.79867 1444.38 4.60338C1444.29 4.45063 1444.06 4.03727 1443.58 3.70074C1442.95 3.26381 1442.05 3.06868 1441.16 3.43497C1440.49 3.71366 1440.14 4.19626 1440.02 4.36666C1439.77 4.73499 1439.67 5.10183 1439.63 5.2116L1439.63 5.21632C1439.58 5.38844 1439.55 5.56057 1439.52 5.70888C1439.41 6.2774 1439.31 7.15363 1439.21 8.27185C1438.8 12.8221 1438.24 23.0425 1437.5 40.3937C1436.03 74.8614 1428.89 99.515 1417.11 117.057C1405.37 134.541 1388.86 145.202 1368.14 151.399C1347.35 157.617 1322.38 159.322 1293.88 158.867C1271.17 158.504 1246.38 156.776 1219.81 154.924C1213.04 154.452 1206.16 153.973 1199.17 153.505C1130.44 148.913 830.724 123.042 548.145 98.3136C406.866 85.9505 269.885 73.8745 168.224 64.8893C117.393 60.3967 75.3925 56.6768 46.0995 54.08C31.453 52.7817 19.9834 51.7641 12.1754 51.0711L3.27033 50.2805L0.991068 50.0781L0.414639 50.0269L0.26971 50.014L0.233378 50.0108C0.225298 50.01 0.221252 50.0097 0 52.4999Z" fill="white" stroke="#A99B9B" stroke-width="5" stroke-miterlimit="1.70212"/>
                </svg>
            </div>

        </section>
    )
}