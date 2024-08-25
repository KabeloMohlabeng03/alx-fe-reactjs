import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
        padding: '10px', 
        backgroundColor: '#eee', 
        textAlign: 'center', 
        display: 'flex', 
        justifyContent: 'center' 
      }}>
      <Link to="/" style={{ 
          margin: '0 15px', 
          textDecoration: 'none', 
          color: '#333' 
        }}>
        Home
      </Link>
      <Link to="/about" style={{ 
          margin: '0 15px', 
          textDecoration: 'none', 
          color: '#333' 
        }}>
        About
      </Link>
      <Link to="/services" style={{ 
          margin: '0 15px', 
          textDecoration: 'none', 
          color: '#333' 
        }}>
        Services
      </Link>
      <Link to="/contact" style={{ 
          margin: '0 15px', 
          textDecoration: 'none', 
          color: '#333' 
        }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
