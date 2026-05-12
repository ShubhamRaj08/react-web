import React from 'react'
import navbar from './component/navbar'

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div className="bg:dark:black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      {/* <h1>Recat Project</h1> */}
    </div>
  )
}

export default App
