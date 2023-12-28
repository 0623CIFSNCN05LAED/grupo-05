import logo from "../../../assets/logo_devvision.png";

export default function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Empresa" />
            </div>
            <div className="navbar">
            
            <div className="user">
                <span>AD</span>
            </div>
        </div>
        </header>
    );
}