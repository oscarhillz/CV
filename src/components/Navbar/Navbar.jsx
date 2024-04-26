
import './Navbar.css'

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';

import { Link } from 'react-router-dom'
import { Drawer } from '@mui/material'

import { useState } from 'react'

export default function Navbar() {
  const icons = [<HouseIcon />, <FaceIcon />, <AccountTreeIcon />]
  const texts = ['Home', 'About', 'Projects']

  const DrawerIcons = [<XIcon />, <LinkedInIcon />, <InstagramIcon />, <GithubIcon />];
  const DrawerIconsLinks = ['https://twitter.com/oscarhillz' ,'https://www.linkedin.com/in/oscarhillz', 'https://www.instagram.com/oscarhillz/', 'https://www.github.com/oscarhillz/']
  const quickLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
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

                <div className="Navbar-icon" onClick={() => setIsDrawerOpen(true)}>
                  <MenuIcon />
                  Menu
                </div>

            </div>
        </div>
    </div>

    <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <div className="Drawer">
        <div className="DrawerHeader">
          <div className="DrawerHeaderIMG"></div>
          <h2>Oscar Hill</h2>
        </div>

        <div className="DrawerLinks">
          {quickLinks.map((link, index) => (
            <Link key={index} to={`/CV/${link}`}>
                {link}
            </Link>
          ))}
        </div>

        <div className="DrawerFooter">
          {DrawerIcons.map((icon, index) => (
            <a key={index} target="_blank" href={DrawerIconsLinks[index]}>
              {icon}
            </a>
          ))}
        </div>
      </div>


    </Drawer>
    </>
  )
}