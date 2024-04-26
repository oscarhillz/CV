import './Navbar_icon.css';
import { Link } from 'react-router-dom';

export default function Navbar_icon({icon, text}) {
    return (
        <div className="Navbar-icon">
            <Link to={`/CV/${text}`}>
                <div className="Navbar-icon-Menu">
                    {icon}
                </div>

                <div className="Navbar-icon-Text">
                    {text}
                </div>
            </Link>
            
        </div>
    )
}