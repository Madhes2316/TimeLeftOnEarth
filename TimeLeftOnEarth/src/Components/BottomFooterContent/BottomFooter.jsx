import React from 'react'
import './BottomFooter.css';

const BottomFooter = () => {

    const dateNow = new Date();

  return (
    <div className='bottomfootermain-div'>
        <span>TimeToLeaveEarth @{dateNow.getFullYear()}</span>
    </div>
  )
}

export default BottomFooter