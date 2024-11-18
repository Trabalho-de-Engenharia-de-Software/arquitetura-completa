import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import LoginPage from './pages/LoginPage';
import "./App.css"
import SignInPage from './pages/SignInPage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Index/>} path='/' exact/>
      <Route path="/login" element={<LoginPage />} exact/>
      <Route path='/signin' element={<SignInPage/>} exact/>
    </Routes>
  </BrowserRouter>
  )
}
