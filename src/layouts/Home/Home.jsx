import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

import Technology from '../../components/Technology/Technology';

import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Testimonio from '../../components/Testimonio/Testimonio';

import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import FunctionsIcon from '@mui/icons-material/Functions';
import BusinessIcon from '@mui/icons-material/Business';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export default function Home() {
  const tarjetas = [
    { titulo: 'Website',           description: 'abcdfdsfgsdfsdabc', icon: <WebIcon        sx={{ fontSize: 40 }} /> },
    { titulo: 'Landing Page',      description: 'abcdfdsfgsdfsdabc', icon: <FlightLandIcon  sx={{ fontSize: 40 }} /> },
    { titulo: 'Custom Apps',       description: 'abcdfdsfgsdfsdabc', icon: <AppSettingsAltIcon       sx={{ fontSize: 40 }} /> },
    { titulo: 'Algorithms',        description: 'abcdfdsfgsdfsdabc', icon: <FunctionsIcon       sx={{ fontSize: 40 }} /> },
    { titulo: 'Business Strategy', description: 'abcdfdsfgsdfsdabc', icon: <BusinessIcon          sx={{ fontSize: 40 }} /> },
    { titulo: 'Support',           description: 'abcdfdsfgsdfsdabc', icon: <SupportAgentIcon    sx={{ fontSize: 40 }} /> }
  ];

  const listaTechnology = [
    {titulo: 'Front End', 
            listaIconos: [
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JS" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" style={{width: '60px', height: '60px'}} />], 
            listaNombreIconos: ['HTML', 'CSS', 'JS', 'React', 'Figma']}, 
    {titulo: 'Back End', 
            listaIconos: [
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgresSQL" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" style={{width: '60px', height: '60px'}} />],
            listaNombreIconos: ['Java', 'Spring Boot', 'PostgresSQL', 'MongoDB']},
    {titulo: 'Learning', 
            listaIconos: [
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cassandra/cassandra-original.svg" alt="Casandra" style={{width: '60px', height: '60px'}} />], 
            listaNombreIconos: ['Python', 'AWS', 'Casandra']},
    {titulo: 'Extra', 
            listaIconos: [
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github" style={{width: '60px', height: '60px'}} />,
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" style={{width: '60px', height: '60px'}} />],
            listaNombreIconos: ['Git', 'Github', 'Docker']}]

  return (
    <>
      <Navbar />

      <body>
        <div className="Hero">
          <h2>Software Developer</h2>
          <h1>Oscar Hill</h1>
          <span>Full Stack</span>
          <span>React & Spring Boot</span>
          <Button size="large" variant="contained">Contact</Button>
        </div>

        <div className="Projects">
          {/* telefono web */}
        </div>

        <div className="Services">
          <h2>Everything you need to reach the next level</h2>
          <div className="Services-array">
            {tarjetas.map((tarjeta, index) => {
              return <Tarjeta key={index} titulo={tarjeta.titulo} description={tarjeta.description} icon={tarjeta.icon} />;
            })}
          </div>
        </div>

        {/* <div className="About">
          <div className="About-Img">
            <div className="About-Img-Card">
              <h2>Oscar Hill</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur nisi ducimus, velit iusto, dignissimos cumque sint natus</p>
              <Button size="large" variant="contained">Let's Talk</Button>
            </div>
          </div>
        </div> */}

        <div className="Technologies">
          <h2>Technologies</h2>
          <br />
          {listaTechnology.map((technology, index) => {
            return <Technology key={index} titulo={technology.titulo} listaIconos={technology.listaIconos} listaNombreIconos={technology.listaNombreIconos} />;
          })}
        </div>


        <div className="Testimony">
          <h2>Check some reviews</h2>
          <Container>
            <p>I understand your needs, ensuring you get a product you are happy with.</p>
          </Container>

          <div className="Testimony-Card">
            <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} testimonio={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat tempora asperiores ut quidem dolor unde saepe quo at, perferendis animi laboriosam corporis? Libero nesciunt praesentium, voluptates deleniti voluptate quaerat autem!'} />
            <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} testimonio={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat tempora asperiores ut quidem dolor unde saepe quo at, perferendis animi laboriosam corporis? Libero nesciunt praesentium, voluptates deleniti voluptate quaerat autem!'} />
            <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} testimonio={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat tempora asperiores ut quidem dolor unde saepe quo at, perferendis animi laboriosam corporis? Libero nesciunt praesentium, voluptates deleniti voluptate quaerat autem!'} />
          </div>
        </div>

        {/* <div className="Contact">
          <Container>
            <h2>Want to chat?</h2>
            <p>Schedule a call... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima quam culpa ab necessitatibus laudantium, quae sapiente. Deleniti ullam temporibus quaerat omnis molestias? Voluptatem, sint? Voluptates delectus dolorum debitis beatae.</p>
            contact
          </Container>
        </div> */}

        <Footer />

      </body>
    </>
  );
}