import React, { useState } from 'react';
import './UserInputField.css';
import { lifeSpanCountryData } from '../../Utils/lifeSpanCountryData';
import TimeLeftCards from '../TimeLeftContent/TimeLeftCards';

const UserInputField = ({ isOpen }) => {
  if (!isOpen) return null;

  // State hooks for managing input values
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState('');

  const [openCalculatedDisplay,setOpenCalculatedDisplay] = useState(false);
  const [timeToLeaveEarthStats, setTimeToLeaveEarthStats] = useState(null);


  // const [yearLeft, setYearLeft] = useState(0);
  // const [monthLeft, setMonthLeft] = useState(0);
  // const [weekLeft, setWeekLeft] = useState(0);
  // const [dayLeft, setDayLeft] = useState(0);
  // const [hourLeft, setHourLeft] = useState(0);
  // const [minuteLeft, setMinuteLeft] = useState(0);
  // const [secondLeft, setSecondLeft] = useState(0);

  const handleSubmit = () => {

    if (!name || !dob || !country) {
      setError('All fields are required');
      return;
    }
    
    setError('');
    console.log({
      name,
      gender,
      dob,
      country,
    });
    const countryData = lifeSpanCountryData.find(item => item.country === country);
    const genderLifeExpectancy = countryData ? Math.round(Number(countryData[`${gender}`])) : null;

    // console.log(genderLifeExpectancy);
    const lastAliveDate = new Date(dob);
    lastAliveDate.setFullYear(lastAliveDate.getFullYear() + genderLifeExpectancy);

    let lastAliveDateYear = lastAliveDate.getFullYear();
    let lastAliveDateMonth = lastAliveDate.getMonth() + 1;
    let lastAliveDateDay = lastAliveDate.getDate();
    
    const yearLeft = lastAliveDate.getFullYear() - new Date().getFullYear();
    const monthLeft = diffInMonths(new Date(lastAliveDateYear,lastAliveDateMonth,lastAliveDateDay),new Date());
    const weekLeft = weeksBetween(new Date(),new Date(lastAliveDateYear,lastAliveDateMonth,lastAliveDateDay));
    const daysLeft = daysBetween(new Date(),lastAliveDate)
    const timeLeft = timeBetween(new Date(),lastAliveDate)

    setTimeToLeaveEarthStats({
      yearLeft,
      monthLeft,
      weekLeft,
      daysLeft,
      timeLeft
    });
    
    console.log("timeToLeaveEarthStats:",timeToLeaveEarthStats);


    setOpenCalculatedDisplay(true);
  };

  const weeksBetween = (d1, d2) => {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  const diffInMonths = (end, start) => {
    var timeDiff = Math.abs(end.getTime() - start.getTime());
    return Math.round(timeDiff / (2e3 * 3600 * 365.25));
 }

 const daysBetween = (date1, date2) => {
  const differenceInTime = date2 - date1;
  const differenceInDays = Math.round(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
}

const timeBetween = (date1, date2) => {
    const differenceInMs = Math.abs(date2 - date1);

    const totalHours = Math.floor(differenceInMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(differenceInMs / (1000 * 60));
    const totalSeconds = Math.floor(differenceInMs / 1000);

    return { totalHours, totalMinutes, totalSeconds };
}

  const handleClear =()=>{
    setName('');
    setDob('');
    setGender('');
    setCountry('');
    setError('');
  }


  return (
    <>
    <div className="mainUserInputField-div">
        <h1>Please fill in your details</h1>
      <div className="inputFieldContent-div">
        <div className="nameGenderInputFields-div">
          <label>Enter your name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="25"
            required
          />
          <label>Select your gender:</label>
          <select
            name="genders"
            id="genders"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="dobCountryInputFields-div">
          <label>Select your date of birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <label>Where do you live:</label>
          <select
            name="countries"
            id="countries"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          >
            <option value="">Select a country</option>
            {lifeSpanCountryData.map((countryData, index) => (
              <option key={index} value={countryData.country}>
                {countryData.country}
              </option>
            ))}
          </select>
        </div>
      </div>
      {error && <p className="errorMessageText">{error}</p>}
      <br />
      <div className="calculateButton-div">
        <button onClick={handleSubmit}>Calculate my departure</button>
        <button onClick={handleClear}>Clear all</button>
      </div>
    </div>
    <div>
      {openCalculatedDisplay ? <TimeLeftCards timeToLeaveEarthStats={timeToLeaveEarthStats} /> : null}
    </div>
    </>
  );
};

export default UserInputField;
