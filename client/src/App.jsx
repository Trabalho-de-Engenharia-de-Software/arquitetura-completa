import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import LoginPage from './pages/LoginPage';
import "./App.css";
import SignInPage from './pages/SignInPage';
import HomePageUser from './pages/HomePageUser';
import HomePageBarberUser from './pages/HomePageBarberUser';
import AddServicePage from './pages/AddServicePage';
import { AuthProvider } from './Auth/AuthContext.jsx';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path='/' exact />
          <Route path="/login" element={<LoginPage />} exact />
          <Route path='/signin' element={<SignInPage />} exact />
          <Route path='/homeUser' element={<HomePageUser />} exact />
          <Route path='/barberUser/:barberId' element={<HomePageBarberUser />} exact />
          <Route path='/addservice/:barberId' element={<AddServicePage />} exact />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}