import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      {/* Add links to new pages here later */}
    </ul>
  </nav>
);

export default Navbar;
