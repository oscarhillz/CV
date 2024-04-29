import './Footer.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Footer() {
  const icons = [
    <XIcon fontSize="large" />,
    <LinkedInIcon fontSize="large" />,
    <InstagramIcon fontSize="large" />,
    <GithubIcon fontSize="large" />
  ];
  const iconsLinks = ['https://twitter.com/oscarhillz' ,'https://www.linkedin.com/in/oscarhillz', 'https://www.instagram.com/oscarhillz/', 'https://www.github.com/oscarhillz/']
  const quickLinks = ['Home', 'About', 'Projects', 'Services', 'Contact'];


  return (
    <>
      <div className="footer-img">
        <div className="footer-img-circle"></div>
      </div>

      <div className="footer-text">
        <Container>
          <h2>Oscar Hill</h2>
          <p>I design and develop custom software solutions, spanning both front end and back end. I collaborate with you from the initial phase to the final delivery, ensuring your goals are met and that you achieve the best possible outcomes.</p>
        </Container>
      </div>

      <div className="footer-icons">
        {icons.map((icon, index) => (
          <Link key={index} target="_blank" to={iconsLinks[index]}  aria-label="Link">{icon}</Link>
        ))}
      </div>

      <div className="footer-quicklinks">
        <h2>Quick Links</h2>
          {quickLinks.map((link, index) => (
            <Link key={index} to={`/CV/${link}`} onClick={() => window.scrollTo(0, 0)}  aria-label="Link">{link}</Link>
          ))}
      </div>

      <hr />

      <div className="footer-final">
        <p>© Oscar Hill 2024</p>
      </div>

    </>
  );
}