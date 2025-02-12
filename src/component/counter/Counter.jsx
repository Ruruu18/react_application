import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(Math.max(count - 1, 0))
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='btn' style={{ marginRight: '8px', color: 'white', backgroundColor: 'green' }} onClick={increment}>Increment</button>
      <button className='btn' style={{ marginRight: '8px', color: 'white', backgroundColor: 'red' }} onClick={decrement}>Decrement</button>
      <button className='btn' style={{ marginRight: '8px', color: 'white', backgroundColor: 'orange' }} onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
