import React, { useState, useRef } from 'react';

const MonBody = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTime(0);
  };

  return (
    <div>
      <h1>{time}s</h1>
      <button onClick={handleStart} disabled={isActive}>Start</button>
      <button onClick={handlePause} disabled={!isPaused}>Pause</button>
      <button onClick={handleResume} disabled={isActive && isPaused}>Resume</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MonBody;
