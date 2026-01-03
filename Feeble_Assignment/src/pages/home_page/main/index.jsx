import React from 'react'
import './styles.css'
import Button from '../../../components/button'
import Apple from '/Apple.svg'
import Bird from '/Small_Bird.svg'

export default function Main() {
    return (
        <div className='content-container'>
            <div className="content-wrapper">
                <div className="banner">
                    <div className='banner-logo'>
                        <div className="eclipse"></div>
                        <div className="eclipse"></div>
                        <div className="eclipse"></div>
                    </div>
                    <span className='banner-text'>#1 iMessage Automation Tool</span>
                </div>
                <span className='title'><span className='color-blue'>iMessage</span> Automation for Teams and AI Workflows.</span>
                <span className='subtitle'>Coup lets you, your team, or AI workflows send iMessages directly from your phone number, running securely on your Mac or Mac Mini.</span>
                <div className="btn-conatiner">
                    <Button disableHover>Get Started</Button>
                    <Button disableHover type='Secondary' icon={Apple}>Download the Mac app</Button>
                </div>
            </div>
            <img className='small-bird1' src={Bird} />
            <img className='small-bird2' src={Bird} />
            <img className='small-bird3' src={Bird} />
            <img className='small-bird4' src={Bird} />
            <img className='small-bird5' src={Bird} />
        </div>
    )
}
