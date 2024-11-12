import React, { useState } from 'react'
import './GreetingContent.css';
import UserInputField from '../UserInputFieldContent/UserInputField';

import useLocalStorage from 'use-local-storage';

const GreetingContent = () => {
    const [openInput,setOpenInput] = useState(false);
    const handleButtonClick = ()=>{
        setOpenInput(true);
    }

    const [darkMode,setDarkMode] = useLocalStorage("darkMode",false);

  return (
    <>
    <div className='greetingContentMain-div' data-theme={darkMode ? 'dark' : 'light'}>
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

    {!openInput
    ?
        <div className='dummyfooter-div' data-theme={darkMode ? 'dark' : 'light'}></div>
    :
        null
    }
    </>
  )
}

export default GreetingContent