import React, { useState } from 'react';
import './calculator.css'; // Optional: for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setInput(input + e.target.name);
  };
  

  const clear = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Evaluate the expression
      const calcResult = eval(input);
      // Convert result to a number
      let formattedResult = parseFloat(calcResult);
      
      // Check if the result has decimal places
      if (formattedResult % 1 !== 0) {
        // Add 2 decimal places if there are decimal places
        formattedResult = formattedResult.toFixed(2);
      } else {
        // No decimal places needed
        formattedResult = formattedResult.toString();
      }
  
      // Set the result and input
      setResult(formattedResult);
      setInput(input); // Keep the input in the input field
    } catch (error) {
      setResult('Error');
    }
  };
  
  

  const toggleSign = () => {
    // Regular expression to match the last number in the input string
    const updatedInput = input.replace(/(-?\d+(\.\d+)?)(?=[^\d]*$)/, match => {
      // If the number is positive, make it negative
      if (!match.startsWith('-')) {
        return '-' + match;
      }
      // If the number is negative, make it positive
      return match.substring(1);
    });
  
    setInput(updatedInput);
  };
  
  
  

  return (
    <div className="calculator">
      <form>
        <input type="text" value={input} readOnly />
        <input type="text" value={result} readOnly className="result" />
      </form>

      <div className="keypad">
        <button name='clear' className='special-key' onClick={clear} id="clear">Clear</button>
        <button name='backspace' className='special-key' onClick={backspace} id="backspace">C</button>
        <button name="+/-" onClick={toggleSign} id="toggle-sign">+/-</button> {/* Toggle sign button */}
        <button name="/" onClick={handleClick} className='arithmetic-key'>&divide;</button>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick} className='arithmetic-key'>&times; </button>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick} className='arithmetic-key'>&ndash;</button>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick} className='arithmetic-key'>+</button>
        <button name="0" onClick={handleClick} className='zero'>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button onClick={calculate} id="equals" className='arithmetic-key'>=</button>
      </div>
    </div>
  );
};

export default Calculator;
