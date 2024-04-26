import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'

import Tarjeta from '../../components/Tarjeta/Tarjeta';
import Testimonio from '../../components/Testimonio/Testimonio';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/material';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';
import FunctionsIcon from '@mui/icons-material/Functions';
import BusinessIcon from '@mui/icons-material/Business';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';



export default function Home() {
  const tarjetas = [
    { titulo: 'Web Site ',         description: 'abcdfdsfgsdfsdabc', icon: <WebAssetIcon        sx={{ fontSize: 40 }} /> },
    { titulo: 'App Building',      description: 'abcdfdsfgsdfsdabc', icon: <AppSettingsAltIcon  sx={{ fontSize: 40 }} /> },
    { titulo: 'Custom Algorithms', description: 'abcdfdsfgsdfsdabc', icon: <FunctionsIcon       sx={{ fontSize: 40 }} /> },
    { titulo: 'Business Strategy', description: 'abcdfdsfgsdfsdabc', icon: <BusinessIcon        sx={{ fontSize: 40 }} /> },
    { titulo: 'Business Strategy', description: 'abcdfdsfgsdfsdabc', icon: <SearchIcon          sx={{ fontSize: 40 }} /> },
    { titulo: 'Support',           description: 'abcdfdsfgsdfsdabc', icon: <SupportAgentIcon    sx={{ fontSize: 40 }} /> }
  ];

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
            {tarjetas.map((tarjeta) => {
              return <Tarjeta titulo={tarjeta.titulo} description={tarjeta.description} icon={tarjeta.icon} />;
            })}
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
