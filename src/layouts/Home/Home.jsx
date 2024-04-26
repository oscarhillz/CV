import './Home.css'
import Footer from '../../components/Footer/Footer'
import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import Navbar from '../../components/Navbar/Navbar';
import Testimonio from '../../components/Testimonio/Testimonio';



export default function Home() {
  return (
    <>
    <Navbar />

    <body>
      <div className="Hero">
        <h2>Think Create Improve</h2>
        <h1>I build custom apps you will love!</h1>
        <Button size="large" variant="contained">Contact</Button>
      </div>

      <div className="Projects">
        {/* telefono web */}
      </div>

      <div className="Services">
        <h1>Everything you need to reach the next level</h1>
        <div className="Services-array">
          <Tarjeta titulo={'App Build'}         description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
          <Tarjeta titulo={'Business Strategy'} description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
          <Tarjeta titulo={'Business Strategy'} description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
          <Tarjeta titulo={'Business Strategy'} description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
          <Tarjeta titulo={'Business Strategy'} description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
          <Tarjeta titulo={'Support'}           description={'abcdfdsfgsdfsdabc'} icon={<SearchIcon sx={{ fontSize: 40 }}/>}/>
        </div>
      </div>

      <div className="About">
        <div className="About-Img">
          <div className="About-Img-Card">
            <h2>Oscar Hill</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui pariatur nisi ducimus, velit iusto, dignissimos cumque sint natus</p>
            <Button size="large" variant="contained">Let's Talk</Button>
          </div>
        </div>
      </div>

      <div className="Testimony">
        <h1>Check some reviews</h1>
        <Container>
          <p>I understand your needs, ensuring you get a product you are happy with.</p>
        </ Container>
        <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} />
        <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} />
        <Testimonio nombre={'Oscar Hill'} cargo={'CEO'} />

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
  )
}
