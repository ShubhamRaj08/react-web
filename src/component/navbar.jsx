import React from 'react'
// import './style.css'
import assets from '../assets/assets.js'

const navbar = ({ theme, setTheme }) => {
    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24
        xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium     bg-white/50 dark:bg-gray-900/70'>
            <img src={theme === 'light' ? assets.logo_Dark : assets.logo_Light} alt="Logo" className=' w-32 w-sm:40 ' />
            <img src={theme === 'dark' ? assets.logo_Light : assets.logo_Dark} alt="Logo" className=' w-32 w-sm:40 ' />

        </div>
    )
}

export default navbar
