import logo from "../../../assets/logo_devvision.png";

export default function Header () {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo Empresa" />
            </div>
            <div className="navbar">
            <div className="search-box">
                <input type="search" placeholder="Buscar..."/>
                <i className="bi bi-search"></i>
            </div>
            <div className="user">
                <span>JK</span>
            </div>
        </div>
        </header>
    );
}