import './SidebarIcon.css';

export default function SidebarIcon({icon, text}) {
    return (
        <div className="Sidebar-Icon">
            <div className="Sidebar-Icon-Menu">
                {icon}
            </div>

            <div className="Sidebar-Icon-Text">
                {text}
            </div>
        </div>
    )
}