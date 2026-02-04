import { Routes, Route } from 'react-router-dom'  // Import Routes and Route
import Index from './pages'
import MatrixBackground from './components/MatrixBackground';
import './App.css'

function App() {
  return (
      <div>
          <MatrixBackground /> {/* The background stays persistent here */}
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<Index />} />
          </Routes>
      </div>
  )
}
export default App;
