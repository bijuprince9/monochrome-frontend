import React from 'react'
import TopBar from '../Layout/TopBar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
        {/* TopBar */}
        <TopBar/>
        {/* NavBar */}
        <Navbar/>
        {/* CartDrawer */}

    </header>
  )
}

export default Header