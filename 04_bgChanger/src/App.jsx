import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>
      <div className="fixed bottom-10 flex flex-wrap justify-center inset-x-0 px-2 py-1 mx-3 rounded-full bg-green-300">
        <div className="flex flex-wrap px-2 py-2 bg-white rounded-3xl gap-8">
          <button
            className="rounded-full px-3 py-1 text-white"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
            className="rounded-full px-3 py-1 text-white"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
            className="rounded-full px-3 py-1 text-white"
            style={{ backgroundColor: "purple" }}
            onClick={()=>setColor("purple")}
          >
            Purple
          </button>
          <button
            className="rounded-full px-3 py-1 text-white"
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            Blue
          </button>
          <button
            className="rounded-full px-3 py-1 text-black"
            style={{ backgroundColor: "yellow" }}
            onClick={()=>setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="rounded-full px-3 py-1 text-white"
            style={{ backgroundColor: "blueviolet" }}
            onClick={()=>setColor("blueviolet")}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
