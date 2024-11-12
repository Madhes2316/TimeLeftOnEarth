import React, { useState } from 'react';
import './WeekLeft.css';

import useLocalStorage from 'use-local-storage';

const WeekLeft = ({weekLeft}) => {

    const weeksLeft = weekLeft;
    const [darkMode,setDarkMode] = useLocalStorage("darkMode",false);

  return (
    <div className='weekleftmain-div' data-theme={darkMode ? 'dark' : 'light'}>
        <h1>Week(s) left for you on Earth({weekLeft})</h1>
        <span>Each block represents a week</span>
        <br />
        <br />
        <div className="weekBlocks-div">
            {Array.from(Array(weeksLeft)).map((x, index) => 
                <div className="smallWeekblocks-div" key={index} style={{
                    backgroundColor: index === weeksLeft - 1 ? 'red' : '#454545',
                    animation: index === weeksLeft - 1 ? 'blink 1s infinite' : 'none'
                  }}
                  title={index === weeksLeft - 1 ? 'Your Current Week' : ''}
                  >
                </div>
            )}
        </div>
    </div>
  )
}

export default WeekLeft;