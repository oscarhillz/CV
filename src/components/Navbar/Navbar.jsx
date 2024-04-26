
import './Navbar.css'
import Navbar_icon from './Navbar_icon/Navbar_icon'

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const icons = [<HouseIcon />, <FaceIcon />, <AccountTreeIcon />, <MenuIcon />]
  const texts = ['Home', 'About', 'Projects', 'Menu']

  
  return (
    <div className="Navbar">
        <div className="nav-menu">
            <div className="nav-container">
                {icons.map((icon, index) => (
                  <Navbar_icon key={index} icon={icon} text={texts[index]} />
                ))}
            </div>
        </div>


    </div>
  )
}