import { useState, useEffect } from 'react';

const Countdown = ({ eventDate, bgColor }: { eventDate: string; bgColor: string }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const eventTime = new Date(eventDate);
            const timeDiff = eventTime.getTime() - now.getTime();

            if (timeDiff <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(timeDiff / (1000 * 3600 * 24));
                const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
                const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

                setTimeLeft({
                    days,
                    hours,
                    minutes,
                    seconds,
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="flex justify-around p-3" style={{ backgroundColor: bgColor }}>
            {['DAY', 'HOUR', 'MINUTE', 'SECOND'].map((unit, i) => {
                const timeValue = unit === 'DAY' ? timeLeft.days : unit === 'HOUR' ? timeLeft.hours : unit === 'MINUTE' ? timeLeft.minutes : timeLeft.seconds;
                return (
                    <div key={i} className="flex flex-col items-center text-white text-sm">
                        <p className="text-lg font-bold">{timeValue < 10 ? `0${timeValue}` : timeValue}</p>
                        <p>{unit}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Countdown;
