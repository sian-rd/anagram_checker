import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const onSubmitWord = (event) => {
    event.preventDefault() 
    console.log('onSubmit clicked')  
  }

  return (
    <>
      <form onSubmit={onSubmitWord}>
          <label htmlFor="wordInput">Give me a word</label>
          <input type="text" value={""} id="wordInput" />
          <button type='submit'>Submit My Word!</button>
      </form>
      







      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>


      <h1>Vite + React</h1>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>


      <div className="card">
        <p>{counter}</p>
        <button onClick={() => setCounter((counter) => counter + 5)}>
          Add 5
        </button>
      </div>

      {counter > 20 ? <p>Counter is over 20</p> : <p>Counter is under 20</p>}




      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer />
    </>
  )
}

export default App
