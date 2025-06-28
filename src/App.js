import './App.css';
import React,{ useState } from 'react';
function App() {
  const [count, setCount]  = useState(0);
  let increment=()=>{
    setCount(pcount=>pcount+1);
  }
  function reset(){
    setCount(pcount=>0);
  }
  function decrease(){
    if(count<=0){
      setCount(pcount => 0);
    }
    else{
      setCount(pcount=>pcount-1);
    }
  }
  return (
    <> 
    <h1>Sample Count Incrementer using useState</h1>
    <h1>Count: {count}</h1>
    <button onClick={increment} class="button">Increase Count</button>
    <button onClick={decrease} class="decrease">Decrease Count</button>
    <button onClick={reset} class="button">Reset</button>
    <h4>Skipping negative numbers</h4>
    </>
  );
}

export default App;
