import React from 'react';
import { FixedSizeList as List } from 'react-window';
import './WeekLeft.css';

const WeekLeft = ({weekLeft}) => {

    const weeksLeft = weekLeft;
    const renderRow = ({ index, style }) => (
        <div
          className="smallWeekblocks-div"
          key={index}
          style={{ ...style, backgroundColor: 'orange' }}
        />
      );

  return (
    <div className='weekleftmain-div'>
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