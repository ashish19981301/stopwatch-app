import React, { useEffect, useRef, useState } from 'react'
import '../style.css'
const StopWatch = () => {
    const [time, setTime] = useState(0)
    const [isPause, setIsPause] = useState(false)
    const timer = useRef(null)
    // const[isRunning, setIsRunning] = useState(false);
    // const[isPause, setIsPause] = useState(false);
    // const[isReset, setIsReset] = useState(false);

    useEffect(() => {
        if (!isPause) {
            timer.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            return () => clearInterval(timer.current);
        }
    }, [time, isPause]);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const onPause = () => {
        setIsPause(!isPause);
        clearInterval(timer.current);
    }
    const onReset = () => {
        setTime(0);
        setIsPause(true)
    }
    return (
        <>
            <section>
                <div className="stopwatch-container">
                    <div className="stopwatch-display">
                        <div className="stopwatch-display__time">{minutes} min{minutes > 1 && "s"} {seconds} sec{seconds > 1 && "s"}</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="stopwatch-button">
                    <div className="stopwatch-button__start">
                        <button onClick={onPause} className='btn1'>Pause</button>
                        <button onClick={onReset} className='btn2'>Reset</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StopWatch
