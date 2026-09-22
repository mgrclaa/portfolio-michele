import { useState } from 'react'
import Opening from './components/opening/opening'
import Desktop from './components/desktop/desktop'

function App() {
  const [started, setStarted] = useState(false)

return (
  <>
    {!started && <Opening setStarted={setStarted} />}
    {started && <Desktop />}
  </>
)
}

export default App