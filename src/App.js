import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AxiosPractice from './pages/AxiosPractice/AxiosPractice';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Users from './pages/Users/Users';
import Yup from './pages/Yup/Yup';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/yup' element={<Yup />} />
        <Route path='/axios' element={<AxiosPractice />} />
        <Route path='/users' element={<Users />} >
        </Route>
        <Route path='/users/:userId' element={<User />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}
