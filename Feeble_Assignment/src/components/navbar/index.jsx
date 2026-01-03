import React from 'react'
import Logo from '/Logo.svg'
import './styles.css';
import Button from '../button';

const navItems = ['How it Works', 'Pricing', 'Use Case', 'FAQ']

export default function NavBar() {
  return (
    <div className='nav-bar-container'>
      <img src={Logo} alt='logo' />
      <div className='nav-items-wrapper'>
        {navItems?.map((ele) => {
          return <span className='nav-items'>{ele}</span>
        })}
      </div>
      <Button>Contact Sales</Button>
    </div>
  )
}
