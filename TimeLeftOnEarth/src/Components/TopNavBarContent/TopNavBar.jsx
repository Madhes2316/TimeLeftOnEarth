import React from 'react'
import './TopNavBar.css';

const TopNavBar = () => {
  return (
    <div className='mainTopNavBar-div'>
        <div className='logoDarkMode-div'>
            <div className='logoTitle-div'>
                <img src="./vite.svg" alt="" />
                <h1>TimeLeftOnEarth</h1>
            </div>
            <div className='darkMode-div'>
                <img src="./sun.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default TopNavBar