// using useRef and useState hooks

// useRef(initial value) creates a reference to the DOM element in functional components, change in its value does not re render the webpage and it holds the value across re renders done via others

// refContainer.current persists value and assignment/allocation is done via refContainer.current.value => for inputs and values;

// when to use: to access DOM elements and store previos values across re renders(REACT)

import { useState, useRef } from "react";
// import "./App.css";

// for IDE w/o intellisense use React.hooks / routers when programming

function Calculator() {
    const inputRef = useRef(null); 
    const resultRef = useRef(null);  

    const [result, setResult] = useState(0); 

    function plus(e) {
        // Add the code for the plus function
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }

    function minus(e) {
        // Add the code for the minus function
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }

    function times(e) {
        // Add the code for the plus function
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }

    function divide(e) {
        // Add the code for the divide function
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }

    function resetInput(e) {
        // Add the code for the resetInput function
        e.preventDefault();
        inputRef.current.value = 0;
    }

    function resetResult(e) {
        // Add the code for the resetResult function
        e.preventDefault();
        // resultRef.current.value = 0; // only for input tags where value attribute is present
        setResult(0); // state value is displayed not ref 
    }


    return (
        <div className="App">
            <div>
                <h1>Simplest Working Calculator</h1>
            </div>
            <form /* prevent onSubmit() event is generally prefered */ >  
                <p 
                    ref={resultRef} // holds result reference via p element and does not re renders w/p state change
                    //  useful for situations where you need to manipulate the DOM element directly,
                    // such as focusing an input field, measuring its size, or reading its valu
                >{ result }</p> 
                
                <input
                    pattern="[0-9]" // like regEx
                    ref={inputRef} // value passing from here
                    type="number"
                    placeholder="Type a number"
                />
                
                <button onClick={(e) => plus(e)}>add</button>
                
                {/* some similarity b/w event and useRef below  */}
                {/* setResult((result) => result - Number(inputRef.current.value)); */}
                {/* onChange={(e) => setEmail(e.target.value)} /> */}

                
                {/* Add the subtract button */}
                <button onClick={(e) => minus(e)}>minus</button>

                {/* Add the multiply button */}
                <button onClick={(e) => times(e)}>times</button>

                {/* Add the divide button */}
                <button onClick={(e) => divide(e)}>divide</button>

                {/* Add the resetInput button */}
                <button onClick={(e) => resetInput(e)}>reset input</button>
            
                {/* Add the resetResult button */}
                <button onClick={(e) => resetResult(e)}>reset result</button>

            </form>
        </div>
    );
}

export default Calculator;
