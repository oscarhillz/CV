import './About.css';

import { Button, Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LineaDeTiempo from "../../components/LineaDeTiempo/LineaDeTiempo";

import FileDownloadIcon from '@mui/icons-material/FileDownload';

export default function About() {
  

  return (
    <>
    <Navbar />
    
    <body>
      <div className="AboutHeader">
        <h2>Welcome!</h2>
        <h1>I'm Oscar</h1>
        <Button variant="contained" color="primary">
          <FileDownloadIcon />
          Download CV
        </Button>
        <div className="AboutHeaderIMG"></div>
      </div>

      <Container>
        <p>I'm a full stack programmer with two years of experience, utilizing React alongside Spring Boot to address various needs.</p>
        <p>Problem-solving has always piqued my interest, stemming from the inherent flexibility in applying tools in creative and unique ways. My journey began with mathematical problems, swiftly evolving into participation in national math competitions.</p>
      </ Container >

      <div className="AboutStory">
        <Container>
        <h1>Background</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>


        <LineaDeTiempo />



        Foto

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>

        Foto

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus itaque quis, accusantium nostrum officiis dolorum quas porro voluptatibus nulla autem ratione fugiat omnis quibusdam, laudantium dolores! Consectetur explicabo perferendis consequuntur?</p>

        </Container>
      
      
      
      </div>

      <Footer />
    </body>
    </>
  )
}