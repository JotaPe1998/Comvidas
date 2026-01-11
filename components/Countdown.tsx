
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 justify-center items-center text-[#D40843]">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{format(timeLeft.hours)}</span>
        <span className="text-[10px] uppercase tracking-widest">Horas</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{format(timeLeft.minutes)}</span>
        <span className="text-[10px] uppercase tracking-widest">Minutos</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold">{format(timeLeft.seconds)}</span>
        <span className="text-[10px] uppercase tracking-widest">Segundos</span>
      </div>
    </div>
  );
};

export default Countdown;
