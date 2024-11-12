import React, { useState } from 'react';
import './TimeLeftCards.css';
import CountUp from 'react-countup';
import WeekLeft from '../WeekLeftContent/WeekLeft';

import useLocalStorage from 'use-local-storage';

const TimeLeftCards = ({timeToLeaveEarthStats}) => {
    const timeNameArray = [
        {
            id:1,
            timeSpan:'Year(s)',
            timeLeft:timeToLeaveEarthStats.yearLeft
        },
        {
            id:2,
            timeSpan:'Month(s)',
            timeLeft:timeToLeaveEarthStats.monthLeft
        },
        {
            id:3,
            timeSpan:'Week(s)',
            timeLeft:timeToLeaveEarthStats.weekLeft
        },
        {
            id:4,
            timeSpan:'Day(s)',
            timeLeft:timeToLeaveEarthStats.daysLeft
        },
        {
            id:5,
            timeSpan:'Hour(s)',
            timeLeft:timeToLeaveEarthStats.timeLeft.totalHours
        },
        {
            id:6,
            timeSpan:'Minute(s)',
            timeLeft:timeToLeaveEarthStats.timeLeft.totalMinutes
        },
        {
            id:7,
            timeSpan:'Second(s)',
            timeLeft:timeToLeaveEarthStats.timeLeft.totalSeconds
        },
    ]

    const [darkMode,setDarkMode] = useLocalStorage("darkMode",false);
    
  return (
    <>
    <div className='timeLeftCardsMain-div' data-theme={darkMode ? 'dark' : 'light'}>
        <h1>You time left on earth for</h1>
        <div className='timeLeftCards-div'>
        {timeNameArray.map(timeItem => (
				<div className='timeCard-blocks' key={timeItem.id}>
					<span>{timeItem.timeSpan}</span>
					<CountUp end={timeItem.timeLeft} enableScrollSpy={true} scrollSpyOnce={true} duration={3}/>
				</div>
			))}
        </div>
    </div>
    <div>
        <WeekLeft weekLeft={timeToLeaveEarthStats.weekLeft} />
    </div>
    </>
  )
}

export default TimeLeftCards;