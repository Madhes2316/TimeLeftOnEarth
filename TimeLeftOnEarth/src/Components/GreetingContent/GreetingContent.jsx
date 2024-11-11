import React, { useState } from 'react'
import './GreetingContent.css';
import UserInputField from '../UserInputFieldContent/UserInputField';

const GreetingContent = () => {
    const [openInput,setOpenInput] = useState(false);
    const handleButtonClick = ()=>{
        setOpenInput(true);
    }
  return (
    <>
    <div className='greetingContentMain-div'>
        <div className='greetingText-div'>
            <h1>
                Time Left on Earth for 'Developer' is 76 days
            </h1>
            <span>
                Want to know about your departure time from Earth? Click the below button!
            </span>
            <br />
            <button className='leavebutton' onClick={handleButtonClick}>When do i leave?</button>
        </div>
    </div>
    <UserInputField isOpen={openInput}/>
    </>
  )
}

export default GreetingContent