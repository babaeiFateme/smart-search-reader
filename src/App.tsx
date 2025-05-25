import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layouts/Layout'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />\
      </Route>
    </Routes>
  )
}

export default App
