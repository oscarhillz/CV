import './About.css';

import { Container } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function About() {
  return (
    <>
    <Navbar />
    
    <body>
      <div className="AboutHeader">
        <h1>Hi!, Im Oscar</h1>
        <div className="AboutImg"></div>
      </div>

      <Container>
        <p>I am a web developer who loves to create beautiful websites that users will love. I work with you from start to finish to make sure your goals are reached and your users are happy.</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti perspiciatis non iste eius ad distinctio iure et repellendus? Repudiandae sequi mollitia error porro debitis, minima consequatur qui sunt illum!</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti perspiciatis non iste eius ad distinctio iure et repellendus? Repudiandae sequi mollitia error porro debitis, minima consequatur qui sunt illum!</p>
      </ Container >

      <div className="AboutStory">
        
      </div>

      <Footer />
    </body>
    </>
  )
}