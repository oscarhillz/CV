import './Tarjeta.css';


import SearchIcon from '@mui/icons-material/Search';


export default function Tarjeta({ titulo, description, icon }) {
  return (
    <> 
    <div className="card">
        <div className="card-icon">
            <div className="card-icon-bg">
                {icon}
            </div>
        </div>

        <div className="card-content">
            <h3>{titulo}</h3>
            <p>{description}</p>
        </div>
    </div>
    </>
  );
}