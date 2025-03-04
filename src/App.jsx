import Counter from './component/counter/Counter'
import BasicCalculator from './component/counter/BasicCalculator'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Mobile Application Lab</h1>
      <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
      <Counter />
      <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
      <BasicCalculator />
    </div>
  )
}

export default App