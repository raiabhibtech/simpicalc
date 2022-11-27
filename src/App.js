import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	// Add the code for the minus function 
     e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) {
     e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value)); 
    // Add the code for the plus function 
  }; 
 
  function divide(e) {
     e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value)); 
    // Add the code for the divide function 
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault();
    inputRef.current.value = 0;
  }; 
 
  function resetResult(e) { 
  	// Add the code for the resetResult function 
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  }; 
 
  return ( 
    <div className="App"> 
    <div className="main">
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result} 
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset Input</button> 
        <button onClick={resetResult}>reset Result</button> 
        
      </form>
      </div> 
      <div className ="footer">
        <h3>made by Muhammad Ghous Mujataba</h3>
      </div>
    </div>
    
  ); 
} 
 
export default App; 
