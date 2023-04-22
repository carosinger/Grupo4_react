import { useState } from 'react'
import './App.css'
import GroupViews from "./assets/utils/GroupViews";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GroupViews />
    </>
  )
}

export default App
