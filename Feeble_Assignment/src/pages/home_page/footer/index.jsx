import React from 'react'
import Cloud1 from '/Cloud1.svg'
import Cloud2 from '/Cloud2.svg'
import Cloud3 from '/Cloud3.svg'
import Cloud4 from '/Cloud4.svg'
import Bird1 from '/Bird1.svg'
import Bird2 from '/Bird2.svg'
import Bird3 from '/Bird3.svg'
import Bird4 from '/Bird4.svg'
import ArrowDown from '/arrow-down.svg'
import './styles.css'

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-wrapper">
                <img className='image' src={Cloud1} />
                <img className='cloud-image image' src={Cloud2} />
                <img className='cloud-image image' src={Cloud3} />
                <img className='cloud-image image' src={Cloud4} />
                <div className="blender">
                </div>
                <div className='learn-more-container'>
                    <span className='learn-more-text'>Scroll to learn more</span>
                    <img src={ArrowDown} />
                </div>
                <img className='bird-image1' src={Bird1} />
                <img className='bird-image2' src={Bird2} />
                <img className='bird-image3' src={Bird3} />
                <img className='bird-image4' src={Bird4} />
            </div>
        </div>
    )
}
