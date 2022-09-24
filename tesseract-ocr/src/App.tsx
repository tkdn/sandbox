import './App.css'
import { useOcr } from './ocr'

function App() {
  const text = useOcr('/ja.png')

  return (
    <div className="App">
      {text}
    </div>
  )
}

export default App
