import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
  const [minutes, setMinutes] = useState<number | null>(null);

  let currentDate: Date;
  let nextDate: Date;

  const updateDates = () => {
    currentDate = new Date();

    nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate.setHours(0);
    nextDate.setMinutes(0);
    nextDate.setSeconds(0);
    nextDate.setMilliseconds(0);
  };

  const calculateTime = () => {
    updateDates();

    const startTime: number = currentDate.getTime();
    const endTime: number = nextDate.getTime();
    const deltaTime: number = endTime - startTime;
    
    setMinutes(Math.ceil(deltaTime / 60000));
  };

  useEffect(() => {
    const interval = setInterval(calculateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h1>{minutes}</h1>
    </div>
  );
}

export default Timer;