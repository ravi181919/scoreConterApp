import React, { useState } from "react";

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore((prev) => prev + 1);
  };

  const resetTheComponent = () => {
    setScore(0)
  }

  const decreaseScore = () => {
    setScore((prev) => (prev > 0 ? prev - 1 : alert('Sorry! Only Plus Value Is Allowe'), resetTheComponent()));

  };

  return (
    <div className="h-screen w-full bg-black/90 flex items-center justify-center">
      <div className="h-1/2 w-2/5 bg-black/50 text-white rounded-md flex item-center gap-8 justify-center flex-col">
        <div className="w-full  flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Score:{" "}
            <span className="px-2 rounded-md bg-white text-black">{score}</span>
          </h1>
          <p className="text-xl">This is a simple React app.</p>
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <button
            className="bg-white text-black rounded-md px-4 py-2 hover:bg-gray-200"
            onClick={increaseScore}
          >
            Increase Score
          </button>
          <button
            className=" bg-white text-black rounded-md px-4 py-2 hover:bg-gray-200"
            onClick={decreaseScore}
          >
            Decrease Score
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
