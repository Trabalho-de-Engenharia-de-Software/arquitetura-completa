import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import LoginPage from './pages/LoginPage';
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Index/>} path='/' exact/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
  )
}
