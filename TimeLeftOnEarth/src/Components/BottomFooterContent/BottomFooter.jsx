import React, { useState } from 'react'
import './BottomFooter.css';

import useLocalStorage from 'use-local-storage';

const BottomFooter = () => {

    const dateNow = new Date();
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",false);

  return (
    <div className='bottomfootermain-div' data-theme={darkMode ? 'dark' : 'light'}>
        <span>TimeToLeaveEarth @{dateNow.getFullYear()}</span>
    </div>
  )
}

export default BottomFooter