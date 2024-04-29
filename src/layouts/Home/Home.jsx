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
    {titulo: 'Front End', listaIconos: [<WebIcon />, <WebIcon />, <WebIcon />, <WebIcon />], listaNombreIconos: ['React', 'HTML', 'CSS', 'Figma']}, 
    {titulo: 'Back End', listaIconos: [<WebIcon />, <WebIcon />, <WebIcon />, <WebIcon />, <WebIcon />], listaNombreIconos: ['Spring', 'Java', 'Python', 'Spring', 'Python',]},
    {titulo: 'Learning', listaIconos: [<WebIcon />, <WebIcon />, <WebIcon />], listaNombreIconos: ['PostgreSQL', 'MySQL', 'MongoDB']},
    {titulo: 'Extra', listaIconos: [<WebIcon />, <WebIcon />, <WebIcon />], listaNombreIconos: ['Git', 'Docker', 'AWS']}]

  return (
    <>
      <Navbar />

      <body>
        <div className="Hero">
          <h2>Software Developer</h2>
          <h1>Oscar Hill</h1>
          <h4>Full Stack React & Spring Boot</h4>
          <Button size="large" variant="contained">Contact</Button>
        </div>

        <div className="Projects">
          {/* telefono web */}
        </div>

        <div className="Services">
          <h1>Everything you need to reach the next level</h1>
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
          <h1>Technologies</h1>
          <br />
          {listaTechnology.map((technology, index) => {
            return <Technology key={index} titulo={technology.titulo} listaIconos={technology.listaIconos} listaNombreIconos={technology.listaNombreIconos} />;
          })}
        </div>


        <div className="Testimony">
          <h1>Check some reviews</h1>
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
            <h1>Want to chat?</h1>
            <p>Schedule a call... Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima quam culpa ab necessitatibus laudantium, quae sapiente. Deleniti ullam temporibus quaerat omnis molestias? Voluptatem, sint? Voluptates delectus dolorum debitis beatae.</p>
            contact
          </Container>
        </div> */}

        <Footer />

      </body>
    </>
  );
}
