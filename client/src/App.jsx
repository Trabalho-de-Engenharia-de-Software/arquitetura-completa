import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import LoginPage from './pages/LoginPage';
import "./App.css"
import SignInPage from './pages/SignInPage';
import HomePageUser from './pages/HomePageUser';
import HomePageBarberUser from './pages/HomePageBarberUser';
import AddServicePage from './pages/AddServicePage';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Index/>} path='/' exact/>
      <Route path="/login" element={<LoginPage />} exact/>
      <Route path='/signin' element={<SignInPage/>} exact/>
      <Route path='/homeUser' element={<HomePageUser/>} exact/>
      <Route path='/barberUser' element={<HomePageBarberUser/>} exact/>
      <Route path='/addservice' element={<AddServicePage/>} exact/>
    </Routes>
  </BrowserRouter>
  )
}
