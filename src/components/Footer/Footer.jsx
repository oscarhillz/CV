import './Footer.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';


export default function Footer() {
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
        <XIcon />
        <LinkedInIcon />
        <InstagramIcon />
        <GithubIcon />
    </div>
    
    <div className="footer-quicklinks">
        <h2>Quick Links</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>

    <hr />
    
    <div className="footer-final">
      <p>© Oscar Hill 2024</p>
    </div>
    
    </>
  );
}