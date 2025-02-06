import { Routes, Route } from 'react-router-dom'
import HomePage from '@pages/home/HomePage.tsx'

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  )
}