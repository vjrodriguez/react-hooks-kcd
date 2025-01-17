// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import { useState } from "react" 

function Greeting({initialName = ''}) {
 const [name, setName] = useState(initialName)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    // setName(initialName)
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName='pierre'/>
}

export default App
