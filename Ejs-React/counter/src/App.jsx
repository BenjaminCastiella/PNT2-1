import React, { useState } from "react"
import Button from "./components/Button";

function App() {
  const [clicks, incrementClicks] = useState(0);

  function increment(){
    return incrementClicks(clicks + 1);
  }

  return (
    <>
      <h1>Counter de clicks!</h1>

      <div>
        <h2>{clicks}</h2>
        <Button onClick={increment} />
      </div>
    </>
  );
}

export default App;
