
import './Navbar.css'

import HouseIcon from '@mui/icons-material/House';
import FaceIcon from '@mui/icons-material/Face';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import ContactPageIcon from '@mui/icons-material/ContactPage';


import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import LeetcodeIcon from '@mui/icons-material/Code';

import { Link } from 'react-router-dom'
import { Drawer } from '@mui/material'

import { useState } from 'react'

export default function Navbar() {
  const icons = [<FaceIcon />, <AccountTreeIcon />];
  const texts = ['About', 'Projects'];

  const DrawerIcons = [<XIcon fontSize="large" />, <LinkedInIcon fontSize="large" />, <InstagramIcon fontSize="large" />, <GithubIcon fontSize="large" />, <LeetcodeIcon fontSize="large" />];
  const DrawerIconsLinks = ['https://twitter.com/oscarhillz' ,'https://www.linkedin.com/in/oscarhillz', 'https://www.instagram.com/oscarhillz/', 'https://www.github.com/oscarhillz/', 'https://leetcode.com/u/oscarhillz/'];
  const quickLinks = ['About', 'Projects', 'Services', 'Contact'];
  const quickLinksIcons = [<FaceIcon fontSize="large" />, <AccountTreeIcon fontSize="large" />, <SettingsSuggestIcon fontSize="large" />, <ContactPageIcon fontSize="large" />];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <div className="Navbar">
        <div className="nav-menu">
          <div className="nav-container">
            <Link to={`/CV/`} onClick={() => window.scrollTo(0, 0)}  aria-label="Link">
              <div className="Navbar-icon">
                <HouseIcon />
                House
              </div>
            </Link>

            {icons.map((icon, index) => (
              <Link key={index} to={`/CV/${texts[index]}`} onClick={() => window.scrollTo(0, 0)} aria-label="Link">
                <div className="Navbar-icon">
                  {icon}
                  {texts[index]}
                </div>
              </Link>
            ))}

            <div className="Navbar-icon" onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon/>
              Menu
            </div>
          </div>
        </div>
      </div>

      <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div className="Drawer">
          <div className="DrawerHeader">
            <div className="DrawerHeaderIMG"></div>
            <h1>Oscar Hill</h1>
          </div>

          <div className="DrawerLinks">
            <Link to={`/CV/`} onClick={() => window.scrollTo(0, 0)}  aria-label="Link">
                <div className="DrawerLink">
                  <HouseIcon fontSize="large"/>
                  <p>Home</p>
                </div>
              </Link>


            {quickLinks.map((link, index) => (
              <Link key={index} to={`/CV/${link}`} onClick={() => window.scrollTo(0, 0)}  aria-label="Link">
                <div className="DrawerLink">
                  {quickLinksIcons[index]}
                  <p>{link}</p>
                </div>
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
  );
}