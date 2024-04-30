import './Testimonio.css'

import TestimonioFooter from './TestimonioFooter/TestimonioFooter'

import { Container } from '@mui/material';

export default function Testimonio({nombre, cargo, testimonio}) {
  return (
    <>
    <div className="Testimonio">
        <Container>
            <p>{testimonio}</p>
        </ Container>

        <TestimonioFooter nombre={nombre} cargo={cargo} />

    </div>
    </>
  );
}