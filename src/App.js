import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import User from './pages/User/User';
import Users from './pages/Users/Users';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/users' element={<Users />} >
          {/* nested route */}
          <Route path=':userId' element={<User />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
