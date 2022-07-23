import "./CountDownToDate.css";
import {useEffect, useState} from 'react';

function App() {

  const[arr, setTimeArray] = useState([0, 0, 0, 0]);
  const[deadline, setDeadline] = useState('September 1, 2022');
  const[temp, setTemp] = useState('');
  
  const _1min = 60; const _1hour = 60*_1min; const _1day = 24*_1hour;

  useEffect(()=>{
    let intervId = setInterval(()=>updateDHMS(deadline), 1000);
    return () => clearInterval(intervId)
  }, [deadline]);

  function handleChange(e) {
    setTemp(e.target.value);
  }  

  function handleSubmit(e) {
    if(temp !== '') {
    setDeadline(temp);
    setTemp('');
    updateDHMS(temp);
    } 
    e.preventDefault();  
  }

  function updateDHMS (date) {
    let timeLeft = (Date.parse(date) - Date.now())/1000;
    let days = Math.floor(timeLeft/_1day);
    let hours = Math.floor((timeLeft/_1hour) % 24);
    let mins = Math.floor((timeLeft/_1min) % 60);
    let secs = Math.floor(timeLeft % 60);
    setTimeArray([days, hours, mins, secs]);
  }
  
  function leading0(num) {
    return num<10 ? '0'+ num : num;
  }

  return(
    <div className="App">
      <div className="App-title">Countdown to {deadline}</div>
      <div className="cont">
        <div className="clock-elem">{leading0(arr[0])} days</div>
        <div className="clock-elem">{leading0(arr[1])} hours</div>
        <div className="clock-elem">{leading0(arr[2])} mins</div>
        <div className="clock-elem">{leading0(arr[3])} secs</div>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input className="box2" type='type' onChange={handleChange} value={temp} placeholder='new date: Month day, year'/>
        <button className="but">Submit</button>
      </form> 
    </div>
  )
}

export default App;