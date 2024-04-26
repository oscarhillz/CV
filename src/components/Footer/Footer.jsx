import './Footer.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Footer() {
  const icons = [<XIcon />, <LinkedInIcon />, <InstagramIcon />, <GithubIcon />];
  const quickLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];


  return (
    <>
      <div className="footer-img">
        <div className="footer-img-circle"></div>
      </div>

      <div className="footer-text">
        <Container>
          <h2>Oscar Hill</h2>
          <p>I create beautiful websites your users will love. I work with you from start to finish to make sure your goals are reached and your users are happy.</p>
        </Container>
      </div>

      <div className="footer-icons">
        {icons.map((icon) => (
          <div key={icon}>{icon}</div>
        ))}
      </div>

      <div className="footer-quicklinks">
        <h2>Quick Links</h2>
          {quickLinks.map((link) => (
            <Link key={link} to={`/CV/${link}`}>{link}</Link>
          ))}
      </div>

      <hr />

      <div className="footer-final">
        <p>© Oscar Hill 2024</p>
      </div>

    </>
  );
}