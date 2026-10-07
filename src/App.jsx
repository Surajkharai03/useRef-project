import React, { useRef, useState } from 'react'

const App = () => {
  const [time, settime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const timerRef = useRef(null);

  const startTimer = () => {

    // Prevent multiple timers from running
    if (timerRef.current !== null) {
      return;
    }

    setIsRunning(true);

    timerRef.current = setInterval(() => {  // value ko hmne persist(stay/continue) kr diya
      settime(time => time + 1)
    }, 1000);
  }

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;

    setIsRunning(false);
  }

  const resetTimer = () => {
    stopTimer();
    settime(0);
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">

          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm mb-3">
            Stopwatch
          </p>

          <h1 className="text-6xl font-bold text-white">
            {time}
          </h1>

          <p className="text-gray-500 mt-2">
            seconds
          </p>

        </div>


        {/* Timer Circle */}
        <div className="flex justify-center mb-8">

          <div className="relative w-48 h-48">

            {/* Outer Circle */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-700">
            </div>


            {/* Running Line */}
            <div
              className={`absolute inset-[-4px] rounded-full border-4 border-transparent border-t-green-400 ${
                isRunning ? "animate-spin" : ""
              }`}
            >
            </div>


            {/* Timer Content */}
            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <span className="text-4xl font-semibold text-white">
                  {time}
                </span>

                <p className="text-gray-500 text-sm">
                  SEC
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* Buttons */}
        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={startTimer}
            className="bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition duration-200 active:scale-95"
          >
            Start
          </button>


          <button
            onClick={stopTimer}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition duration-200 active:scale-95"
          >
            Stop
          </button>


          <button
            onClick={resetTimer}
            className="bg-red-500 hover:bg-red-400 text-white font-semibold py-3 rounded-xl transition duration-200 active:scale-95"
          >
            Reset
          </button>

        </div>


        {/* Bottom text */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Start the timer and track your seconds
        </p>

      </div>

    </div>
  )
}

export default App