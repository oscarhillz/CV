
import './Navbar.css'

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';

import { Link } from 'react-router-dom'

export default function Navbar() {
  const icons = [<HouseIcon />, <FaceIcon />, <AccountTreeIcon />, <MenuIcon />]
  const texts = ['Home', 'About', 'Projects', 'Menu']
  
  return (
    <div className="Navbar">
        <div className="nav-menu">
            <div className="nav-container">
                {icons.map((icon, index) => (
                  <Link key={index} to={`/CV/${texts[index]}`}>
                      <div className="Navbar-icon">
                          {icon}
                          {texts[index]}
                      </div>
                  </Link>
                ))}
            </div>
        </div>
    </div>
  )
}