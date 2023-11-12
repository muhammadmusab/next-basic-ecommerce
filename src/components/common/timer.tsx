"use client";

import React, { useEffect, useState } from "react";
interface Props {
  expiryTime?: string;
}
const Timer = ({ expiryTime }: Props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inputDate, setInputDate] = useState(
    expiryTime ? expiryTime : `16 July ${new Date().getFullYear()}`
  );
  const [currentDate, setCurrentDate] = useState(inputDate);
  useEffect(() => {
    setInterval(updateCountDown, 1000);
  }, [currentDate]);

  const updateCountDown = () => {
    const changingDate = new Date(inputDate) as any;
    const currentDate = new Date() as any;
    const diff = changingDate - currentDate; // diff is in miliseconds

    setDays(formatTime(Math.floor(diff / 1000 / 60 / 60 / 24))); // ms -> sec-> min -> hour -> day
    setHours(Math.floor(diff / 1000 / 60 / 60) % 24);
    setMinutes(Math.floor(diff / 1000 / 60) % 60);
    setSeconds(Math.floor(diff / 1000) % 60);
  };
  function formatTime(time: any) {
    return time < 10 ? `0${time}` : time;
  }
  return (
    <div>
      <div className="flex items-center justify-between w-[310px]">
        <p className="text-[12px] font-medium">
          Days
        </p>
        <p className="text-[12px] font-medium">
          Hours
        </p>
        <p className="text-[12px] font-medium">
          Minutes
        </p>
        <p className="text-[12px] font-medium">
          Seconds
        </p>
      </div>
      <div className="flex items-center justify-between w-[300px] font-inter text-[32px] font-bold">
        <h5 className="text-black">{days}</h5>
        <p className="mx-3 text-secondaryhover">:</p>

        <h5 className="text-black">{hours}</h5>
        <p className="mx-3 text-secondaryhover">:</p>

        <h5 className="text-black">{minutes}</h5>
        <p className="mx-3 text-secondaryhover">:</p>

        <h5 className="text-black">{seconds}</h5>
      </div>
    </div>
  );
};

export default Timer;
