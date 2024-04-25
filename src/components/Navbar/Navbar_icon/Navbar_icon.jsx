import './Navbar_icon.css';

export default function Navbar_icon({icon, text}) {
    return (
        <div className="Navbar-icon">
            <div className="Navbar-icon-Menu">
                {icon}
            </div>

            <div className="Navbar-icon-Text">
                {text}
            </div>
        </div>
    )
}