import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num, setnum] = useState(0);
  const increaseHandler = () => {
    if (num <20) {
      setnum(num + 1);
    } else {
      alert("value can't be increased over 20");
    }
  };
  const decreaseHandler = () => {
    if (num == 0) {
      alert("Value can't be decrased further 0");
    } else {
      setnum(num - 1);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="bg-red-400 p-4 mt-2 text-center w-2/3 rounded-lg">
          Counter
        </h1>
        <div className=" bg-slate-400 px-5 py-3 m-3  text-white rounded-full">
          <p className="">{num}</p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={decreaseHandler}
            className="bg-red-400 px-3 py-1 rounded-lg"
          >
            Decrease
          </button>
          <button
            onClick={increaseHandler}
            className="bg-red-400 px-3 py-1 rounded-lg"
          >
            Increase
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
