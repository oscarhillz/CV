import './About.css';

import { listaTechnology } from '../Home/Home';

import Technology from '../../components/Technology/Technology';
import { Button, Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function About() {
  

  return (
    <>
    <Navbar />
    
    <body>
      <div className="AboutHeader">
        <h2>Welcome!</h2>
        <h1>I'm Oscar</h1>
        <Button variant="contained" color="primary">Download CV</Button>
        <div className="AboutHeaderIMG"></div>
      </div>

      <Container>
        <p>I design and develop custom software solutions, spanning both front end and back end. I collaborate with you from the initial phase to the final delivery, ensuring your goals are met and that you achieve the best possible outcomes.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti perspiciatis non iste eius ad distinctio iure et repellendus? Repudiandae sequi mollitia error porro debitis, minima consequatur qui sunt illum!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti perspiciatis non iste eius ad distinctio iure et repellendus? Repudiandae sequi mollitia error porro debitis, minima consequatur qui sunt illum!</p>
      </ Container >

      <div className="AboutStory">
        <Container>
        <h1>Background</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />

        Foto

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />

        <div className="Technologies">
          <h1>Technologies</h1>
          <br />
          {listaTechnology.map((technology, index) => {
            return <Technology key={index} titulo={technology.titulo} listaIconos={technology.listaIconos} listaNombreIconos={technology.listaNombreIconos} />;
          })}
        </div>

        Foto

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <br />

        </Container>
      
      
      
      </div>

      <Footer />
    </body>
    </>
  )
}