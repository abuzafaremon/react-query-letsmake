import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/axios'>Axios</NavLink></li>
        <li><NavLink to='/yup'>Yup</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;