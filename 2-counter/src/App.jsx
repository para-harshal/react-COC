import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(0);

  function increaseCounter() {
    if (counter < 20) setCounter(counter++);
  }

  function decreaseCounter() {
    if (counter < 1) return;
    setCounter(counter--);
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  )
}

export default App
