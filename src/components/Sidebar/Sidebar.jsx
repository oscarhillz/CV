import './Sidebar.css';
import SidebarIcon from './Sidebar-Icon/SidebarIcon';

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <div className="Sidebar-Header">
        
      </div>

      <div className="profile">
        
      </div>

      <div className="Sidebar-Menu">
        <SidebarIcon/>
      </div>

      <div className="Quicklinks">
        <XIcon />
        <LinkedInIcon />
        <InstagramIcon />
        <GithubIcon />
      </div>
    </div>
  )
}