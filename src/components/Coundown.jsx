import React, { useState, useEffect } from 'react';
import "../components/CountDown.css"

function Countdown() {
  const [days, setDays] = useState(9);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(23);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const targetDate = new Date('2024-06-16T16:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(intervalId);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000)); 
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    
    <div className="main-div" style={{display:"flex", gap:"14px", borderRadius:"20px 20px 0px 0px", justifyContent:"center", width:"100%", padding:"8px",fontWeight:"bold"}}>
      <div >
        {days} <span>Days</span>
      </div>
      <div className="countdown-item"j>
        {hours.toString().padStart(2, '0')} <span>Hours</span>
      </div>
      <div className="countdown-item">
        {minutes.toString().padStart(2, '0')} <span>Minutes</span>
      </div>
      <div className="countdown-item">
        {seconds.toString().padStart(2, '0')} <span>Seconds</span>
      </div>
    </div>
  );
}

export default Countdown;