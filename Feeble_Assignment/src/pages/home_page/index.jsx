import React from 'react'
import NavBar from '../../components/navbar/index'
import './styles.css'
import Footer from './footer'
import Main from './main'
import Bird from '/Bird2.svg'

export default function HomePage() {
    return (
        <>
            <div className="background-eclipse"></div>
            <NavBar></NavBar>
            <Main></Main>
            <Footer></Footer>
            <img className='flying-bird1' src={Bird} />
            <img className='flying-bird2' src={Bird} />
        </>
    )
}
