
import './Navbar.css'
import Navbar_icon from './Navbar_icon/Navbar_icon'

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="nav-menu">
            <div className="nav-container">
                <Navbar_icon icon={<HouseIcon sx={{ fontSize: 25 }}/>} text={'Home'}/>
                <Navbar_icon icon={<FaceIcon sx={{ fontSize: 25 }}/>} text={'About'}/>
                <Navbar_icon icon={<AccountTreeIcon sx={{ fontSize: 25 }}/>} text={'Projects'}/>
                <Navbar_icon icon={<MenuIcon sx={{ fontSize: 25 }}/>} text={'Menu'}/>
            </div>
        </div>


    </div>
  )
}