import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "$#%&*@!%?";
    }

    for (let i = 1; i<=length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{passwordGenrator()},[length, numAllowed, charAllowed, passwordGenrator])

  return (
    <>
      <h1 className="text-4xl text-center max-w-md mx-auto text-white m-3 mt-10 bg-red-400 px-3 py-2 rounded-full mb-8">
        Password Generator
      </h1>

      <div className=" w-full max-w-md mx-auto  bg-gray-600 rounded-lg py-6 px-4 my-8 font-semibold ">
        <div className="flex rounded-full overflow-hidden my-4 py-2">
          <input
            type="text"
            value={password}
            placeholder="password"
            className=" outline-none py-1 px-3 w-full "
            readOnly
          />
          <button className="bg-blue-700 px-3 text-white py-1 outline-none shrink-0">
            Copy
          </button>
        </div>
        <div className="text-sm flex gap-x-3 bg-slate-300 rounded-full py-2 px-3 items-center ">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              id="range"
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="range">Length({length})</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              id="numInput"
              defaultChecked={numAllowed}
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              id="specialChar"
              defaultChecked={charAllowed}
              onChange={() => {
                
                setCharAllowed((prev) => !prev);
                
              }}
            
            /> 
            <label htmlFor="specialChar">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
