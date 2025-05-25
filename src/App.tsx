
import { Routes, Route } from 'react-router-dom'
import './styles/master.scss'
import Home from './styles/pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
