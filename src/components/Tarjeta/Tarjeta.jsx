import './Tarjeta.css';

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
            <p>{titulo}</p>
            <p>{description}</p>
        </div>
    </div>
    </>
  );
}