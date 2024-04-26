import './Testimonio.css'

import TestimonioFooter from './TestimonioFooter/TestimonioFooter'

import { Container } from '@mui/material';

export default function Testimonio({nombre, cargo, img}) {
  return (
    <>
    <div className="Testimonio">
        <Container>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat tempora asperiores ut quidem dolor unde saepe quo at, perferendis animi laboriosam corporis? Libero nesciunt praesentium, voluptates deleniti voluptate quaerat autem!</p>
        </ Container>

        <TestimonioFooter nombre={nombre} cargo={cargo} img={img}/>

    </div>
    </>
  );
}