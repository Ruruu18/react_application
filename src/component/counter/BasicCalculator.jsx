import React, { useState } from 'react';

const BasicCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case '+':
        setResult(number1 + number2);
        break;
      case '-':
        setResult(number1 - number2);
        break;
      case 'x':
        setResult(number1 * number2);
        break;
      case '/':
        if (number2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(number1 / number2);
        }
        break;
      default:
        setResult('Invalid operation');
    }
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <select  className='select' style={{ marginLeft: '8px' }} value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="x">×</option>
        <option value="/">/</option>
      </select>
      <input className='input' style={{ marginLeft: '8px' }} 
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button className='btn' style={{ marginLeft: '8px' }} onClick={calculate}>=</button>
      <div className='result' style={{ paddingTop: '10px', fontSize: '30px', fontWeight: 'bold', color: 'green' }}>Result = {result}</div>
    </div>
  );
};

export default BasicCalculator;