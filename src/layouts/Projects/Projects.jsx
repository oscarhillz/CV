import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './Projects.css';

export default function Projects() {
  const projects = [{titulo: 'Project 1', descripcion: 'Description 1'}, 
                    {titulo: 'Project 2', descripcion: 'Description 2'}, 
                    {titulo: 'Project 3', descripcion: 'Description 3'}];

  return (
    <>
    <Navbar />
    <div className="Projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div className="Project" key={index}>
          <h2>{project.titulo}</h2>
          <p>{project.descripcion}</p>
        </div>
      ))}
      
      <Footer />
    </div>
    </>
  );
}